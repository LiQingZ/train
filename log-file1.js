
const { exec } = require('child_process')

let userInfo=[]
process.argv.forEach((item)=>{
  if(/author/.test(item)){
   let  author = item.match(/author:(.*)/)[1]
   userInfo.author = author
  }
  if(/date/.test(item)){
   let date = item.match(/date:(.*)/)[1]
   userInfo.date = date
  }
  if(/startDate/.test(item)){
   let startDate = item.match(/startDate:(.*)/)[1]
   userInfo.startDate = startDate
  }
  if(/route/.test(item)){
    userInfo.route=item.match(/route:(.*)/)[1]
  }
 })
 const option={
  cwd:userInfo.route,
  shell:"/bin/bash",
  maxBuffer: 10000 * 1024,
}
  const defaultDate=()=>{
    const date=new Date(new Date()-10*24*3600*1000)
    const defaultDate=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return defaultDate
  }
 const formatCurrDate=()=>{
   const date=new Date()
   const currentDate=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
   return currentDate
 }
//  console.log('😈',new Date('2018-09-12'))
//  const date1=new Date('2018-09-12')
//  console.log('🤥',date1)
//  console.log(`git log --author ${userInfo.author} --since ==${userInfo.startDate? userInfo.startDate:defaultDate }  `)
exec(`git log --author "${userInfo.author}" --since ==${userInfo.startDate? userInfo.startDate:defaultDate() } --before ==${formatCurrDate()}` ,option,(error,stdout,stderr)=>{
  if(error){
    console.log(error)
  }
  const groupData = stdout.split("commit")
  const Data = []
  groupData.forEach((item) => {
  if(/Author/g.test(item)){
     let info = {}
     const author = item.match(/Author: (.*) </)[1]
     const date = item.match(/Date: (.*) +/)[1]
     const formatDate = new Date(date)
     if(formatDate.getUTCMonth() > 6){
      info.author = author
      info.commitDate = JSON.stringify(formatDate).match(/"(.*)T/)[1]
       if(/]/.test(item)){
        const message = item.match(/] (.*)\n/)?item.match(/] (.*)\n/)[1]:''
        info.message = message
       }else{
         info.message = "merge two branch"
       }
      Data.push(info)
     }
  }
})
  
/* 打印命令行参数 node scripts/log-file/log-file.js author：123 
return [ '/usr/local/Cellar/node/10.1.0/bin/node','/Users/amy/workplace/target-react-components/scripts/log-file/log-file.js','author：123' ] */

  Data.forEach((item,index)=>{ 
     return console.log(index+' '+'I do '+item.message +' on '+((/{/.test(item.message) ? item.message.match(/{(.*)}/)[1]:"components")+(' at '+item.commitDate)))
  })
})