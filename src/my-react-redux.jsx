import React from 'react';
import propTypes from 'prop-types';  

const ThemeContext = React.createContext(); 

// 返回Provider组件
export class Provider extends React.Component{
    // 制定属性规则：store必须要传递，且是一个对象类型
    static propTypes = {
         store : propTypes.object.isRequired  
    };
    render(){                                                                   
        return <ThemeContext.Provider value={{ store: this.props.store }}>    {/*注册上下文，并将传递的store挂载 */}  
            {this.props.children}      {/* 接受子节点并进行渲染,通过上下文将子节点放上去 */}                                    
        </ThemeContext.Provider>;
    }
}

// 返回connect组件
export function connect(mapStateToProps,mapDispatchToProps){   //大函数返回小函数，小函数利用到大函数的闭包里面的内容---柯里化思想  

    // 确保mapStateToProps和mapDispatchToProps都是function函数
    if(typeof mapStateToProps !== 'function'){
        mapStateToProps = function () { 
            return {}; 
        }
    }

    if(typeof mapDispatchToProps !== 'function'){
        if(mapDispatchToProps !== null && typeof mapDispatchToProps === 'object'){ 
            const actions = mapDispatchToProps; 
            mapDispatchToProps = function (dispatch) {  
                const obj = {};
                //循环actions，给obj中加同样属性名的内容，且每一项都是函数，每一个都用dispatch方法，派发之前的actions
                for(let key in actions){
                    if(!actions.hasOwnProperty(key)) break;
                    obj[key] = function (...args) {
                        dispatch(actions[key](...args));
                    };
                }
                return obj;     
            };
        }else{ 
            mapDispatchToProps = function () {
                return {};
            }
        }
    }

    return function connectHOC(Component){  
        return class Proxy extends React.Component{   
            static contextType = ThemeContext; 
            render(){
                return <Component {...this.queryProps()}/>  //虽然返回的是代理组件，但是最后渲染的还是Component组件，所以返回Component
            }

            // 获得mapStateToProps,mapDispatchToProps函数执行返回的结果 
            queryProps = () => {    
                const store = this.context.store;
                const state = mapStateToProps(store.getState()); 
                const action = mapDispatchToProps(store.dispatch);
                
                return {
                    ...state,  
                    ...action
                };
            }

            componentDidMount(){
                // 当前状态更新后，能重新渲染当前组件
                this.context.store.subscribe(()=>{
                    this.forceUpdate();
                })
            }
        }
    }
}
