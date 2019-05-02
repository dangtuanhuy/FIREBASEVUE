
import HelloWorld from "../components/HelloWorld.vue"
import Navbar from "../components/GUI/navbar.vue"
import SignUp from "../components/authentication/signup.vue"
export const routes = [
    {
        /* eslint-disable */
        path: '/',
        name: 'home',
        components: {
            default: HelloWorld,
            'header-top': Navbar
        }
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        components: {

            default: SignUp,
            'header-top': Navbar
        }
    }

]