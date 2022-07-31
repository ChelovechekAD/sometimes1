key = 0;
function size_blocks(){
	var vw = jQuery(document).width();
	var padding_workspace = jQuery(".main_block").css('padding'); 
	let test = "";
	for (let i = 0; i < padding_workspace.length-2; i++){
    test += padding_workspace[i];};
    padding_workspace = Number(test);
    var width_workspace = vw * 0.90 * 0.79 - 4 * padding_workspace;
    let size = width_workspace / 2;
    let line_for_grid_rows = "grid-template-rows: ";
    $('.blocks').css('width', size).css('height', size);
    size += 30;
    for (let i = 0; i < $('.blocks').length; i++){
    	line_for_grid_rows += size + "px";
    }
    line_for_grid_rows += ';';
	document.getElementById("main_catalog").style.cssText = "grid-template-columns: repeat(2, 1fr); " + line_for_grid_rows;
    $('.info').children('p').show();
    $('.test_line').show();
    $('.info_for_small_blocks').hide()
}

function size_blocks_s(){
    var vw = jQuery(document).width();
    var padding_workspace = jQuery(".main_block").css('padding'); 
    let test = "";
    for (let i = 0; i < padding_workspace.length-2; i++){
    test += padding_workspace[i];};
    padding_workspace = Number(test);
    var width_workspace = vw * 0.90 * 0.79 - 4 * padding_workspace;
    let size = width_workspace / 4;
    let line_for_grid_rows = "grid-template-rows: ";
    $('.blocks').css('width', size).css('height', size);
    size += 30;
    for (let i = 0; i < $('.blocks').length; i++){
        line_for_grid_rows += size + "px";
    }
    line_for_grid_rows += ';';
    document.getElementById("main_catalog").style.cssText = "grid-template-columns: repeat(4, 1fr); " + line_for_grid_rows;
    $('.info').children('p').hide();
    $('.test_line').hide();
    $('.info_for_small_blocks').show()
}
var key_swap_size_icons = 0;
//0 - large 
//1 - small
function switch_to_s(test){
    key_swap_size_icons = test;

    if (key_swap_size_icons == 1){
        size_blocks_s();
    }
    else{
        size_blocks();
    }
}

jQuery(window).resize(()=>{if (key_swap_size_icons == 0){size_blocks()} else {size_blocks_s()}});

jQuery(document).ready(size_blocks);
