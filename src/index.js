import components from "./components";

const plugin = {
    install (Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop]
                Vue.component(prop, component)
            }
        }
    }
}

export default plugin