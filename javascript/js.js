let ticketValue = 200;
let discount;
let valueDot;
let totalResult = ticketValue;
const result = document.querySelector(".alert");
const cards = document.querySelectorAll(".border")
document.querySelector(".form-number").addEventListener("change", e => {
    valueDot = e.target.value
    change()
})

document.querySelector(".form-select").addEventListener("change", (e) =>{
    discount = e.target.value
    change()
})

function change(){
    if(valueDot != undefined && valueDot > 0 && valueDot <=4){
        totalResult = ticketValue*valueDot;
        if(discount > 0){
            setColorCard()
            let totalResultDot = totalResult;
            totalResult = -totalResult*discount/100 + totalResult;
            result.innerHTML = `Total a Pagar: <b>${totalResult}</b> (<strike>${totalResultDot}</strike> <b>%${discount} OFF!</b>)`
        }else{
            result.innerHTML = `Total a Pagar: <b>${totalResult}</b>`
        }
    }else{
        setColorCard()
        result.innerHTML = `Total a Pagar: <b>----</b>`
    }
}

function setColorCard(){
    cards.forEach(e => {
        console.log(e)
        if(discount==e.id && e.classList.contains("toggle") == false){
            e.classList.add("toggle");
        }else{
            e.classList.remove("toggle");
        }
    })
}

function clickReset(e){
    if(confirm("Seguro que quieres borrar?")){
        e.setAttribute("type","reset");
        result.innerHTML = "Total a Pagar: ";
    }
}