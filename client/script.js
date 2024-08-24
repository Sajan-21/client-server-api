{
    async function getdata () {
        try{
            const response = await fetch ('http://localhost:3000/datas');
            console.log("response : ",response);

            const parsed_datas = await response.json();
            console.log("parsed_datas : ",parsed_datas);

            let rows = '';

            for(let i = 0; i < parsed_datas.length; i++) {
                rows = rows + `
                <div>title : ${parsed_datas[i].title}</div>
                <div>price : ${parsed_datas[i].price}</div>
                `
            }

            let datacontainer = document.getElementById('datacontainer');
            console.log("datacontainer : ",datacontainer);

            datacontainer.innerHTML = rows;
            console.log(rows);

        }
        catch (error){
            console.log("error",error);
        }
    }

    getdata();
}