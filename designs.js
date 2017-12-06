function makeGrid() {
    
    var row = $("#input_height").val();
    var col = $("#input_width").val();
    var tab = $("#pixel_canvas");
    tab.children().remove();
    for (var i = 0; i < row; i++) {
        tab.append("<tr></tr>");
        for (var x = 0; x < col; x++) {
            tab.children().last().append("<td></td>");
        }
    }
    tab.on("click", "td", function() {
        var color = $("#colorPicker").val();
        $(this).attr("bgcolor", color);
    });
        
}

$("input[type='submit']").click(function(evt) {
    evt.preventDefault();
    makeGrid();
});

