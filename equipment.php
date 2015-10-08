<?php
	
	$mode = $_REQUEST["mode"];
	$armorpart1 = "";
	$helm = '<image height="20" width="20" src="./images/helm.png" title="レジーナの封印された力：ヘルム"/>';
	$armor = '<image height="20" width="20" src="./images/armor.png" title="レジーナの封印された力：アーマー"/>';
	$pant = '<image height="20" width="20" src="./images/pant.png" title="レジーナの封印された力：パンツ"/>';
	$glove = '<image height="20" width="20" src="./images/glove.png" title="レジーナの封印された力：グローブ"/>';
	$boot = '<image height="20" width="20" src="./images/boot.png" title="レジーナの封印された力：ブーツ"/>';
	$small = '<image height="20" width="20" src="./images/small.png" title="レジーナの封印された力：シールド"/>';
	$large = '<image height="20" width="20" src="./images/boot.png" title="レジーナの封印された力：ラージシールド"/>';
	
	switch($mode){
		case "helm":
			$armorpart1 = $helm;
		break;
		case "armor":
			$armorpart1 = $armor;
		break;
		case "pant":
			$armorpart1 = $pant;
		break;
		case "glove":
			$armorpart1 = $glove;
		break;
		case "boot":
			$armorpart1 = $boot;
		break;
		case "small":
			$armorpart1 = $boot;
		break;
		case "large":
			$armorpart1 = $boot;
		break;
	}
	
	
	$html_head =<<<__________HEAD___________
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<script type="text/javascript" src="./Js/enhance.js"></script>
	<script type="text/javascript" src="./Js/jquery-2.1.4.js"></script>
	<title></title>
	<script type="text/javascript">
	$(document).ready(function(){
		//Set focus on 攻撃力 at start
		$("#defence").focus();
		
		//Event when Calculate button is clicked
		$("#calculate").click(function(){
			addition();
		});
		
		//Event when quality is changed
		$("#quality").change(function(){
			addition();
		});
		
		//Event when enhancement is changed
		$("#enhance").change(function(){
			addition();
		});
	});
	
	//Prevents from writing alphabet in textbox
	function numeric(evt){
		var charCode = (evt.which) ? evt.which : event.keyCode
			if (charCode > 31 && (charCode < 48 || charCode > 57))
				return false;
		return true;
	}
	</script>
</head>
<body>
<form action="" method="post">
__________HEAD___________;

	$html_end=<<<__________END___________
	<tr>
		<td></td>
		<td>品質:
			<select name="quality" id="quality">
				<option value=1>★</option>
				<option value=2 selected>★★</option>
				<option value=3>★★★</option>
				<option value=4>★★★★</option>
				<option value=5>★★★★★</option>
			</select>
			強化値:
			<select name="enhance" id="enhance">
				<option value=0 selected>なし</option>
				<option value=1>+1</option>
				<option value=2>+2</option>
				<option value=3>+3</option>
				<option value=4>+4</option>
				<option value=5>+5</option>
				<option value=6>+6</option>
				<option value=7>+7</option>
				<option value=8>+8</option>
				<option value=9>+9</option>
				<option value=10>+10</option>
				<option value=11>+11</option>
				<option value=12>+12</option>
				<option value=13>+13</option>
				<option value=14>+14</option>
				<option value=15>+15</option>
			</select>
			<input type="button" id="calculate" value="CALCULATE"/>
		</td>
	</tr>
	<tr>
		<td class="left">→</td>
		<td id="statusDiv"></td>
	</tr>
</table>

	<input type="hidden" id="dummyAtk" value="" />
	<input type="hidden" id="dummyMatk" value="" />
	<input type="hidden" id="dummySpd" value="" />
	<input type="hidden" id="dummyBalance" value="" />
	<input type="hidden" id="dummyCritical" value="" />
	<input type="hidden" id="dummyPower" value="" />
	<input type="hidden" id="dummyAgility" value="" />
	<input type="hidden" id="dummyWill" value="" />
	<input type="hidden" id="dummyIntel" value="" />
	<input type="hidden" id="dummyPlusDamage" value="" />
</form>
</body>
</html>
__________END___________;

$type1=<<<__________HelmAndGloveAndBoot___________
<table>
	<tr>
		<td class="left">
		{$armorpart1}
		</td>
		<td>
			防御力<input type="text" id="defence" onkeypress='return numeric(event);' />
			抵抗力<input type="text" id="resistance1" onkeypress='return numeric(event);' />
		</td>
	</tr>
	<tr>
		<td>
			<image height="20" width="20" src="./images/armorpart2.png" title="頑丈な伝承石の破片"/>
		</td>
		<td>
			力<input type="text" id="power1" onkeypress='return numeric(event);' />
			敏捷<input type="text" id="agility1" onkeypress='return numeric(event);' />
			知能<input type="text" id="intel1" onkeypress='return numeric(event);' />
			意志<input type="text" id="will1" onkeypress='return numeric(event);' />
			抵抗力<input type="text" id="resistance2" onkeypress='return numeric(event);' />
		</td>
	</tr>
__________HelmAndGloveAndBoot___________;

$type2=<<<__________ArmorAndPant___________
<table>
	<tr>
		<td class="left">
			{$armorpart1}
		</td>
		<td>
			防御力<input type="text" id="defence" onkeypress='return numeric(event);' />
			抵抗力<input type="text" id="resistance1" onkeypress='return numeric(event);' />
		</td>
	</tr>
	<tr>
		<td>
			<image height="20" width="20" src="./images/armorpart2.png" title="頑丈な伝承石の破片" />
		</td>
		<td>
			力<input type="text" id="power" onkeypress='return numeric(event);' />
			敏捷<input type="text" id="agility" onkeypress='return numeric(event);' />
			知能<input type="text" id="intel" onkeypress='return numeric(event);' />
			意志<input type="text" id="will" onkeypress='return numeric(event);' />
			抵抗力<input type="text" id="resistance2" onkeypress='return numeric(event);' />
		</td>
	</tr>
	<tr>
		<td>
			<image height="20" width="20" src="./images/armorpart3.png" title="滑らかな伝承石の破片"/>
		</td>
		<td>
			防御力<input type="text" id="defence2" onkeypress='return numeric(event);' />
			抵抗力<input type="text" id="resistance3" onkeypress='return numeric(event);' />
		</td>
	</tr>
__________ArmorAndPant___________;
	
	
	switch($mode){
		case "helm":
			$html = $html_head . $type1 . $html_end;
		break;
		case "armor":
			$html = $html_head . $type2 . $html_end;
		break;
		case "pant":
			$html = $html_head . $type2 . $html_end;
		break;
		case "glove":
			$html = $html_head . $type1 . $html_end;
		break;
		case "boot":
			$html = $html_head . $type1 . $html_end;
		break;
		case "small":
			$html = $html_head . $type1 . $html_end;
		break;
		case "large":
			$html = $html_head . $type1 . $html_end;
		break;
	}
	
	echo $html;

?>