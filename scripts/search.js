/*========================================IndexDB================================================*/
var db = new Dexie("History");
db.version(1).stores({
    items: '++id, cpu, motherboard, memory, videocard, case, powersupply, storage, operatingsystem, software, monitor'
});
db.open().
catch((error) => {
    console.log(error);
});


/*========================================Search Results========================================*/
var x, itemId, temp1;
pc_parts = document.getElementsByTagName("a")
$(document).ready(function() {
    for(var i = 0; i < pc_parts.length; i += 1) {
        pc_parts[i].onclick = function(e) {
            itemId = this.id;
            console.log(itemId)
            $.get('https://api.rainforestapi.com/request?api_key=9E93740D99B24921AACB2A794401ECBE&type=search&amazon_domain=amazon.com&search_term=' + itemId, function(data) {
                x = data.search_results
                db.items.put({
                    cpu: x
                });
                i = 0
                console.log(x)
                while(i != x.length) { // to add all items shown on first page
                    if(x[i]["is_prime"] == true) { // to avoid the product without price                     
                         var content ="<div class='col-md-6 col-sm-6 portfolio-item'>" +

                           "<img class='img-fluid' src='" + x[i]["image"] +
                               "' style='width:300px;height:300px;'>" +
                           "<div class='portfolio-caption'>" +
                               "<h4>" + x[i]["title"] + "</h4>" + "<p class='text-muted'>$" +
                               x[i]["price"]["value"] +
                               "</p>" +
                               "</div>" +
                           "</div>"
                        $("#parts").append(content)
                        $("#pc_parts_modal").modal('show')

                    }
                    i++
                }
                $("#pc_parts_modal").on("hidden.bs.modal", function() {
                    $("#parts").html("");
                });
            });
        }
    }
});