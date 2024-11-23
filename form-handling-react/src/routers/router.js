import {createBrowserRouter} from 'react-router-dom'
import SignupForm from '../components/formikForm'
import RegistrationForm from '../components/RegistrationForm'
import Norm from '../components/Normal'


const router = createBrowserRouter([{
    path:'/Sign',
Component:SignupForm
},{
    path:'/Register',
    Component:RegistrationForm
},

,{
    path:'/',
    Component:Norm
}
]
)
export default router;