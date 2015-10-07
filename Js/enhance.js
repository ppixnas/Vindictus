function underConstruction(){
	alert ("Under Construction");
}

function addition(){
	//1
		atk1 = parseInt(document.getElementById("atk1").value);
		matk1 = parseInt(document.getElementById("Matk1").value);
		spd1 = parseInt(document.getElementById("spd1").value);
		balance1 = parseInt(document.getElementById("balance1").value);
		critical1 = parseInt(document.getElementById("critical1").value);
		power1 = parseInt(document.getElementById("power1").value);
		agility1 = parseInt(document.getElementById("agility1").value);
		will1 = parseInt(document.getElementById("will1").value);
		intel1 = parseInt(document.getElementById("intel1").value);
	//2
		atk2 = parseInt(document.getElementById("atk2").value);
		matk2 = parseInt(document.getElementById("Matk2").value);
		spd2 = parseInt(document.getElementById("spd2").value);
		balance2 = parseInt(document.getElementById("balance2").value);
		critical2 = parseInt(document.getElementById("critical2").value);
		power2 = parseInt(document.getElementById("power2").value);
		agility2 = parseInt(document.getElementById("agility2").value);
		will2 = parseInt(document.getElementById("will2").value);
		intel2 = parseInt(document.getElementById("intel2").value);
	
	//Add
		atk = atk1 + atk2;
		matk = matk1 + matk2;
		spd = spd1 + spd2;
		balance = balance1 + balance2;
		critical = critical1 + critical2;
		power = power1 + power2;
		agility = agility1 + agility2;
		will = will1 + will2;
		intel = intel1 + intel2;
		
		plusDamage = 0;		
		quality = document.getElementById("quality").value;
		enhance = document.getElementById("enhance").value;
		
		
		checkQuality(quality, enhance, atk, matk, balance, critical, spd, power, agility, intel, will, plusDamage);
	}

function checkQuality(quality, enhance, atk, matk, balance, critical, spd, power, agility, intel, will, plusDamage){
	
	
	if (quality==1){
	//-25% Up From The Base
	powerUp = 25*power/100;
	agilityUp = 25*agility/100;
	intelUp = 25*intel/100;
	willUp = 25*will/100;
	
	//Atk 4% down From The Base
	atkUp = 4*atk/100;
	matkUp = 4*matk/100;
	
		atk = atk - Math.round(atkUp);
		matk = matk - Math.round(matkUp);
		spd = spd;
		power = power - Math.round(powerUp);
		agility = agility - Math.round(agilityUp);
		intel = intel - Math.round(intelUp);
		will = will - Math.round(willUp);
	}
	if (quality==2){
		atk = atk;
		matk = matk;
		spd = spd;
		power = power;
		agility = agility;
		intel = intel;
		will = will;
	}
	if (quality==3){
	//15% Up From The Base
	powerUp = 15*power/100;
	agilityUp = 15*agility/100;
	intelUp = 15*intel/100;
	willUp = 15*will/100;
	
	//Atk 2% Up From The Base
	atkUp = 2*atk/100;
	matkUp = 2*matk/100;
	
		atk = atk + parseInt(atkUp);
		matk = matk + parseInt(matkUp);
		spd = spd;
		power = power + parseInt(powerUp);
		agility = agility + parseInt(agilityUp);
		intel = intel + parseInt(intelUp);
		will = will + parseInt(willUp);
	}
	if (quality==4){
	//20% Up From The Base
	powerUp = 20*power/100;
	agilityUp = 20*agility/100;
	intelUp = 20*intel/100;
	willUp = 20*will/100;
	
	//Atk 4% Up From The Base
	atkUp = 4*atk/100;
	matkUp = 4*matk/100;
		
		atk = atk + parseInt(atkUp);
		matk = matk + parseInt(matkUp);
		spd = spd;
		power = power + parseInt(powerUp);
		agility = agility + parseInt(agilityUp);
		intel = intel + parseInt(intelUp);
		will = will + parseInt(willUp);
	}
	if (quality==5){
	//25% Up From The Base
	powerUp = 25*power/100;
	agilityUp = 25*agility/100;
	intelUp = 25*intel/100;
	willUp = 25*will/100;
	
	//Atk 6% Up From The Base
	atkUp = 6*atk/100;
	matkUp = 6*matk/100;
	
		atk = atk + parseInt(atkUp);
		matk = matk + parseInt(matkUp);
		spd = spd;
		power = power + parseInt(powerUp);
		agility = agility + parseInt(agilityUp);
		intel = intel + parseInt(intelUp);
		will = will + parseInt(willUp);
	}
	
	enhancement(quality, enhance, atk, matk, balance, critical, spd, power, agility, intel, will, plusDamage);
}


function enhancement(quality, enhance, atk, matk, balance, critical, spd, power, agility, intel, will, plusDamage){
	if(enhance==0){
		atk = atk;
		matk = matk;
		spd = spd;
		power = power;
		agility = agility;
		intel = intel;
		will = will;
		plusDamage = plusDamage;
	}
	if(enhance==1){
		atk = atk + 50;
		matk = matk + 50;
	}
	if(enhance==2){
		atk = atk + 100;
		matk = matk + 100;
	}
	if(enhance==3){
		atk = atk + 150;
		matk = matk + 150;
	}
	if(enhance==4){
		atk = atk + 250;
		matk = matk + 250;
	}
	if(enhance==5){
		atk = atk + 350;
		matk = matk + 350;
	}
	if(enhance==6){
		atk = atk + 450;
		matk = matk + 450;
		spd = spd + 3;
		plusDamage = 40;
	}
	if(enhance==7){
		atk = atk + 550;
		matk = matk + 550;
		spd = spd + 6;
		plusDamage = 60;
	}
	if(enhance==8){
		atk = atk + 700;
		matk = matk + 700;
		spd = spd + 9;
		plusDamage = 80;
	}
	if(enhance==9){
		atk = atk + 850;
		matk = matk + 850;
		spd = spd + 12;
		plusDamage = 100;
	}
	if(enhance==10){
		atk = atk + 1000;
		matk = matk + 1000;
		spd = spd + 15;
		plusDamage = 120;
	}
	if(enhance==11){
		atk = atk + 1500;
		matk = matk + 1500;
		spd = spd + 19;
		plusDamage = 150;
	}
	if(enhance==12){
		atk = atk + 2000;
		matk = matk + 2000;
		spd = spd + 23;
		plusDamage = 180;
	}
	if(enhance==13){
		atk = atk + 2600;
		matk = matk + 2600;
		spd = spd + 28;
		plusDamage = 220;
	}
	if(enhance==14){
		atk = atk + 3300;
		matk = matk + 3300;
		spd = spd + 33;
		plusDamage = 260;
	}
	if(enhance==15){
		atk = atk + 4100;
		matk = matk + 4100;
		spd = spd + 38;
		plusDamage = 300;
	}
	
	calculate(quality, enhance, atk, matk, balance, critical, spd, power, agility, intel, will, plusDamage);
	
}

function calculate(quality, enhance, atk, matk, balance, critical, spd, power, agility, intel, will, plusDamage){
	/*
	if(isNaN(atk)|| isNaN(matk)|| isNaN(spd)|| isNaN(balance)|| isNaN(critical)
	|| isNaN(power)|| isNaN(agility)|| isNaN(will)|| isNaN(intel)){
		document.getElementById("statusDiv").innerHTML = "情報が足りません。全部入力してください";
		
	}else {
		if(enhance>=6){
			damagePlus = "追加ダメージ+" + plusDamage + "&ensp;";
		}else{
			damagePlus = "";
		}
		document.getElementById("statusDiv").innerHTML = "攻撃力+" + atk + "&ensp;" + "魔法攻撃力+" + matk
		+ "&ensp;" + "バランス+" + balance + "&ensp;" + "クリティカル+" + critical + "&ensp;" + "攻撃速度+" + spd 
		+ "&ensp;" + damagePlus + "力+" + power + "&ensp;" + "敏捷+" + agility + "&ensp;" + "知能+" + intel 
		+ "&ensp;" + "意志+" + will;
	}*/
	
	if(isNaN(atk)|| isNaN(matk)|| isNaN(spd)|| isNaN(balance)|| isNaN(critical)
	|| isNaN(power)|| isNaN(agility)|| isNaN(will)|| isNaN(intel)){
		document.getElementById("statusDiv").innerHTML = "情報が足りません。全部入力してください";
		
	}else {
		if(enhance>=6){
			damagePlus = "追加ダメージ+" + plusDamage + "&ensp;";
		}else{
			damagePlus = "";
		}
		document.getElementById("statusDiv").innerHTML = "攻撃力+" + atk + "&ensp;" + "魔法攻撃力+" + matk
		+ "&ensp;" + "バランス+" + balance + "&ensp;" + "クリティカル+" + critical + "&ensp;" + "攻撃速度+" + spd 
		+ "&ensp;" + damagePlus + "力+" + power + "&ensp;" + "敏捷+" + agility + "&ensp;" + "知能+" + intel 
		+ "&ensp;" + "意志+" + will;
	}
}


