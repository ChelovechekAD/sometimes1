function size_blocks(){
	var vw = jQuery(document).width();
	var width_document = jQuery(document).width() * 0.85 * 0.79 ;
	var count_blocks = document.querySelectorAll(".blocks");
	let key = 0; 
	var width_block = 0;
	var max_count_blocks_in_line = 1; 
	while (key == 0)
	{
		//alert(vw);
		//alert(width_document);
		//alert(max_count_blocks_in_line);
		if((width_document/max_count_blocks_in_line >= 400) && (vw >=1200))
		{
			//width_document -= 5;
			max_count_blocks_in_line++;
		}
		else if((width_document/max_count_blocks_in_line >= 300) && (vw <1200))
		{
			//width_document -= 5;
			max_count_blocks_in_line++;
		}
		else if((width_document/max_count_blocks_in_line >= 220) && (vw <1000))
		{
			//width_document -= 5;
			max_count_blocks_in_line++;
		}
		else if((width_document/max_count_blocks_in_line >= 150) && (vw <= 685))
		{
			//width_document -= 5;
			max_count_blocks_in_line++;
		}
		else 
		{
			max_count_blocks_in_line--;
			key = 1;
		}
	} 
	var max_height = String(width_document/max_count_blocks_in_line);
	var max_width = String(width_document/max_count_blocks_in_line); //window.getComputedStyle(count_blocks[0]).width;
	for (let i = 0; i < count_blocks.length; i++)
	{
		let incss = "height:"+max_height+"px;" + "width:" + max_width + "px;";
		//alert(incss);
		count_blocks[i].style.cssText = incss;
	}	
	let count_lines_for_blocks = count_blocks.length /  max_count_blocks_in_line;
	let line_for_grid_rows = "grid-template-rows: ";
	if (count_lines_for_blocks % 1 > 0)
	{
		count_lines_for_blocks = Math.trunc(count_lines_for_blocks) + 1;
	}
	let max_height_alt = Number(max_height) +10;
	for (let i = 0; i < count_lines_for_blocks; i++)
	{
		line_for_grid_rows += max_height_alt + "px ";
	}
	line_for_grid_rows += ";";
	document.getElementById("main_catalog").style.cssText = "grid-template-columns: repeat("+ max_count_blocks_in_line +", 1fr); " + line_for_grid_rows;
}
//alert(width_document);
jQuery(document).ready(size_blocks);
jQuery(window).resize(size_blocks);
