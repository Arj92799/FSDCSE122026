// console.log("hi")
const container=document.getElementById('container')
// console.log(root)
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React JS')
const h1=React.createElement('h1',{},'Working on React JS')
const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmE2sFyLmmJO8hwrFguIved-TpOqXbjNtma2opmSXng&s=10',style:{height:'200',width:'200'}})

const div2='<div></div>';
const div=React.createElement('div',{},img,h1,h2)
root.render(div)
