$(document).ready(
    function(){
        //data
        const pr1 = {
            url:"https://img.freepik.com/free-photo/close-up-arrangement-modern-vases_23-2149646517.jpg?t=st=1710932419~exp=1710936019~hmac=79637715700c6baf41987949f6ff724fe36f86b9fb1498b07cc553ad83b9d076&w=900",
            title:"Decorative Flower Vase",
            realPrice: "$19.99",
            offer: "75%",
            offerPrice:"$5.99"
        }
        const pr2 = 
            {
                url: "https://img.freepik.com/free-photo/elegant-vegan-alcohol-arrangement_23-2149337726.jpg?t=st=1710937733~exp=1710941333~hmac=cbd3b6437757ca5c0ce98cccae66c29876d24b49fd2860e646a48c3a82db6a34&w=360",
                title: "Elegant Crystal Vase",
                realPrice: "$39.99",
                offer: "40%",
                offerPrice: "$23.99"
            }
        const pr3 = {
            url: "https://img.freepik.com/free-photo/square-clock-outdoors-still-life_23-2150436106.jpg?t=st=1710937810~exp=1710941410~hmac=374487ca5d0e8faa8e59c88dddbac27aed450b789793aca81211454b245381ab&w=360",
            title: "Decorative Wall Clock",
            realPrice: "$39.99",
            offer: "30%",
            offerPrice: "$27.99"
        }
        
        const pr4 = {
            url: "https://img.freepik.com/free-photo/ruffled-leaf-palm-white-pot_53876-146305.jpg?t=st=1710937893~exp=1710941493~hmac=a8b4479c69f05eec49e85e9f368c063a9ba7beecd601bea116645c9b560fe754&w=360",
            title: "Set of 3 Artificial Plants",
            realPrice: "$29.99",
            offer: "10%",
            offerPrice: "$26.99"
        }
        
        const pr5 = {
            url: "https://img.freepik.com/free-photo/table-lamp-bedroom_1373-480.jpg?t=st=1710937925~exp=1710941525~hmac=a4c8b628c4775d2532e3b889454eaa4722cda6b56a819ebdd51947b776a1f110&w=900",
            title: "Modern Ceramic Table Lamp",
            realPrice: "$69.99",
            offer: "15%",
            offerPrice: "$59.49"
        }
         const pr6= {
            url: "https://img.freepik.com/free-photo/high-angle-shot-bed-pillows-by-window-vase-captured-madeira-portugal_181624-16545.jpg?t=st=1710938013~exp=1710941613~hmac=05c7f08b8293d47cba4f8491dbc44ca32a4df375e7d715c0049b9e53f7e9eaeb&w=900",
            title: "Soft Faux Fur Area Rug",
            realPrice: "$89.99",
            offer: "25%",
            offerPrice: "$67.49"
        }
                        
        

        let productDetails = [pr1,pr2,pr3,pr4,pr5,pr6];
        for(let i = 0;i<productDetails.length;i++){
            var col = `
            <div class=" center-div col-sm-4 mt-5">
            <div class="card  " style="width: 18rem;">
                <img  src=${productDetails[i].url} class="card-img-top" style="height:200px"/>
                <div class="card-body text-center orange">
                   <div class="card-title">${productDetails[i].title} </div>  
                   <div class="card- text">
                        <span class="offer text-success me-3">&darr;${productDetails[i].offer}</span><span class="strike realPrice me-5">${productDetails[i].realPrice}</span> <span class="text-black offerPrice">${productDetails[i].offerPrice}</span>
                   </div>
                    <div class="row mt-3">
                        <button class="btn bg-primary col-4 ms-2 me-3 text-white">Buy Now</button>
                        <button class="btn bg-success col-6 ms-3 text-white">Add to cart</button>
                     </div>
     
                </div>
               
            </div>
        </div>
            `
            $("#pro").append(col)
        }
    }
    
)