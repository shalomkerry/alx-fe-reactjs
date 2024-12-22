import {create} from 'zustand'
const userNameStore = create((set)=>{
   return {
  userName: '',
  setUserName: (userName) => set({userName}),
  userDetails:[],
  setUserDetails:(detail)=>set({...userDetails,detail})
   }
})
export default userNameStore;
