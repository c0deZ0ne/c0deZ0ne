import  jsonfile  from 'jsonfile'
import simpleGit from 'simple-git'
import moment from 'moment'
import  random  from 'random'

const filePath = './data.json'

// const makeCommit = (x:any,y:any)=>{
    
//     const date = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format()


// const data = {
//     date:date
// }

// jsonfile.writeFile(filePath,data,()=>{
    
//     simpleGit().add([filePath]).commit(date, {'--date': date}).push('https://github.com/dogubo/hackme.git','main')
// })

// }


const makeCommit = (n)=>{
    if(n==0)return simpleGit().push()
    const x = random.int(0,54)
    const y = random.int(0,6)

    const date = moment().subtract(4,'y').add(1,'d').add(x,'w').add(y,'d').format()


const data = {
    date:date
}

jsonfile.writeFile(filePath,data,()=>{
    
    simpleGit().add([filePath]).commit(date, {'--date': date},makeCommit.bind(this,--n))
})



}


makeCommit(1000)

export {}