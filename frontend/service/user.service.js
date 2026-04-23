import axios from 'axios'

export class UserService{
    constructor(){
        this.instance = axios.create({
            baseURL: 'http://localhost:8000/api/v1/user'
        })
    }

    async getLoggedIn(name,username,avatar){
      try {
          const result = await this.instance.post('/loginUser',{username:username,name:name,avatar:avatar},{withCredentials:true})
          if(result){
            localStorage.setItem("userData", JSON.stringify(result?.data))
          }
          return result;
      } catch (error) {
        console.log(error)
      }
    }

        async deleteUser(name,username){
      try {
          const result = await this.instance.post('/deleteUser',{username:username,name:name},{withCredentials:true})
          return result;
      } catch (error) {
        console.log(error)
      }
    }
}

const service = new UserService()

export default service