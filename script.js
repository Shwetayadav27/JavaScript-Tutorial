let student = {
    id:101,
    sname: "Shweta",
    age:21,
    isworking: false,
    img: "https://th.bing.com/th/id/OIP.iV-pgB8fG1uHbm-GqREZuwHaFj?rs=1&pid=ImgDetMain"
}


let {id,sname,age,isworking,img}=student

let info=`
<h1> welcome</h1>
<img src="${img}"alt="no image" height="100px" width="100px">
<h2>ID: ${id}</h2>
<h2>Name: ${name}</h2>
<h3>Age: ${age} yr old</h3>
<h3>Working/Student: ${isworking ? "Working Profession": "Student"}

`
document.write(info)
