// console.log("hi")
// const container=document.getElementById('container')
// console.log(root)
// const root=ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React JS')
// const h1=React.createElement('h1',{},'Working on React JS')
// const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmE2sFyLmmJO8hwrFguIved-TpOqXbjNtma2opmSXng&s=10',style:{height:'200',width:'200'}})

// const h11=<h1>Hello using babel</h1>;
// const div=React.createElement('div',{},img,h1,h2,div2)
const container = document.getElementById('container');

const root = ReactDOM.createRoot(container);
const h1=<h1>Welcome to react</h1>
const img=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHaRWxyz39EW8N1HMNGHM-fvt9HzJFtM2DLiVxCwQ-w&s=10" height={300} width={400} ></img>
const div = (
    <>
        {h1}
        {img}
    </>
);
const h3=<h3>Resume Builder</h3>
const div1=
<>
<div style={{border:'2px solid red',height:'300px',width:'400px'}}>
    {h3}
    {div}
</div>
</>


root.render(div1)
