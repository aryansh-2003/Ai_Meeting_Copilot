import axios from 'axios'

export class MessageService{
    constructor(){
        this.instance = axios.create({
            baseURL: 'http://localhost:8000/api/v1/message'
        })
    }

    async postMessage(user,content){
      console.log(user,content)
      try {
          const result = await this.instance.post('/postMessage',{user:user,content:content})
          return result;
      } catch (error) {
        console.log(error)
      }
    }


      async getHistory(){
      try {
          const result = await this.instance.get('/getHistory')
          return result;
      } catch (error) {
        console.log(error)
      }
    }
}

const service = new MessageService()

export default service