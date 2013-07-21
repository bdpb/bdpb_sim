var currentChara;
var tblCharaCurrent;
var levelCapLimit = 50;

var Chara = function(intChara) {
  this.id  = intChara;
  this.LV  = 1;
  this.HP  = tblCharaCurrent[intChara][1];
  this.MP  = tblCharaCurrent[intChara][2];
  this.STR = tblCharaCurrent[intChara][3];
  this.VIT = tblCharaCurrent[intChara][4];
  this.INT = tblCharaCurrent[intChara][5];
  this.MEN = tblCharaCurrent[intChara][6];
  this.AGI = tblCharaCurrent[intChara][7];
  this.DEX = tblCharaCurrent[intChara][8];
  this.ABI = tblCharaCurrent[intChara][9];
  this.AST = tblCharaCurrent[intChara][10];

  // 栄誉キャラにチェックされていた場合補正する
  if (document.data.bless.checked) {
    this.HP  += 5;
    this.MP  += 3;
    this.STR += 2;
    this.VIT += 2;
    this.INT += 2;
    this.MEN += 2;
    this.AGI += 2;
    this.DEX += 2;
  }

  this.STR_mean = this.STR;
  this.VIT_mean = this.VIT;
  this.INT_mean = this.INT;
  this.MEN_mean = this.MEN;
  this.AGI_mean = this.AGI;
  this.DEX_mean = this.DEX;
  this.ABIdata = tblAbility[this.ABI] || [1.00, 1.00, 0, 0, 0, 0, 0, 0];
}

function status_up(intProba) {
  var intRnd, intProba;
  intRnd = Math.floor(Math.random() * 10) + 1;
  return ((intRnd > intProba) ? 1 : 2 );
}

function MAIN(intCount) {
  var c = currentChara;
  var intAST  = parseInt(document.data.AST.value);
  var ast = tblAstarisk[intAST];
  var intMaxLv = (document.data.beginner.checked) ? 10 : parseInt(document.data.levelCap.value) ;

  for (i = 0; i < intCount; i++) {
    if (c.LV < intMaxLv) {
      c.LV     = c.LV + 1;
      c.HP     = c.HP  + tblHP[c.LV-2][ast[1]];
      c.MP     = c.MP  + tblMP[c.LV-2][ast[2]];
      c.STR    = c.STR + status_up(ast[3]);
      c.VIT    = c.VIT + status_up(ast[4]);
      c.INT    = c.INT + status_up(ast[5]);
      c.MEN    = c.MEN + status_up(ast[6]);
      c.AGI    = c.AGI + status_up(ast[7]);
      c.DEX    = c.DEX + status_up(ast[8]);

      c.STR_mean   = c.STR_mean + 1 + ast[3] / 10;
      c.VIT_mean   = c.VIT_mean + 1 + ast[4] / 10;
      c.INT_mean   = c.INT_mean + 1 + ast[5] / 10;
      c.MEN_mean   = c.MEN_mean + 1 + ast[6] / 10;
      c.AGI_mean   = c.AGI_mean + 1 + ast[7] / 10;
      c.DEX_mean   = c.DEX_mean + 1 + ast[8] / 10;
    }
  }

  draw();
}

function reload() {
  var c = currentChara;

  c.LV  = parseInt(document.data.LV.value);
  c.HP  = parseInt(document.data.HP.value);
  c.MP  = parseInt(document.data.MP.value);
  c.STR = parseInt(document.data.STR.value);
  c.VIT = parseInt(document.data.VIT.value);
  c.INT = parseInt(document.data.INT.value);
  c.MEN = parseInt(document.data.MEN.value);
  c.AGI = parseInt(document.data.AGI.value);
  c.DEX = parseInt(document.data.DEX.value);

  draw();
}

function draw() {
  var c = currentChara;
  var c_org = new Chara(c.id);

  document.data.LV.value        = c.LV;
  document.data.HP.value        = c.HP;
  document.data.MP.value        = c.MP;
  document.data.STR.value       = c.STR;
  document.data.VIT.value       = c.VIT;
  document.data.INT.value       = c.INT;
  document.data.MEN.value       = c.MEN;
  document.data.AGI.value       = c.AGI;
  document.data.DEX.value       = c.DEX;
  document.data.PT.value        = c.HP + c.MP + c.STR + c.VIT + c.INT + c.MEN + c.AGI + c.DEX;

  document.getElementById("Ability").innerHTML = c.ABI;

  // ゼロ除算対策
  var denominator = (c.LV == 1) ? 1 : c.LV - 1;

  document.getElementById("STR_rate").innerHTML = ((c.STR - c_org.STR) / denominator).toFixed(2);
  document.getElementById("VIT_rate").innerHTML = ((c.VIT - c_org.VIT) / denominator).toFixed(2);
  document.getElementById("INT_rate").innerHTML = ((c.INT - c_org.INT) / denominator).toFixed(2);
  document.getElementById("MEN_rate").innerHTML = ((c.MEN - c_org.MEN) / denominator).toFixed(2);
  document.getElementById("AGI_rate").innerHTML = ((c.AGI - c_org.AGI) / denominator).toFixed(2);
  document.getElementById("DEX_rate").innerHTML = ((c.DEX - c_org.DEX) / denominator).toFixed(2);

  document.getElementById("STR_mean").innerHTML = c.STR_mean.toFixed(2);
  document.getElementById("VIT_mean").innerHTML = c.VIT_mean.toFixed(2);
  document.getElementById("INT_mean").innerHTML = c.INT_mean.toFixed(2);
  document.getElementById("MEN_mean").innerHTML = c.MEN_mean.toFixed(2);
  document.getElementById("AGI_mean").innerHTML = c.AGI_mean.toFixed(2);
  document.getElementById("DEX_mean").innerHTML = c.DEX_mean.toFixed(2);

  document.getElementById("HP_Abi").innerHTML  = Math.floor(c.HP * c.ABIdata[0]);
  document.getElementById("MP_Abi").innerHTML  = Math.floor(c.MP * c.ABIdata[1]);
  document.getElementById("STR_Abi").innerHTML = c.STR + c.ABIdata[2];
  document.getElementById("VIT_Abi").innerHTML = c.VIT + c.ABIdata[3];
  document.getElementById("INT_Abi").innerHTML = c.INT + c.ABIdata[4];
  document.getElementById("MEN_Abi").innerHTML = c.MEN + c.ABIdata[5];
  document.getElementById("AGI_Abi").innerHTML = c.AGI + c.ABIdata[6];
  document.getElementById("DEX_Abi").innerHTML = c.DEX + c.ABIdata[7];

  update_ast_status();
}

function charaload() {
  currentChara = new Chara(parseInt(document.data.Chara.value));

  tblAstarisk.forEach(function(value, index) {
    if (value[0] == currentChara.AST) {
      document.data.AST.value = index;
    }
  });

  draw();
}

function adjust_levelcap() {
  var intMaxLv = parseInt(document.data.levelCap.value);

  if (intMaxLv > levelCapLimit)
    document.data.levelCap.value = levelCapLimit;
  else if (intMaxLv < 1)
    document.data.levelCap.value = 1;
}

function update_ast_status() {
  if (!document.data.ast_status_enable.checked) {
    document.getElementById("ast_status").innerHTML = "";
    return;
  }

  var c = currentChara;
  var tblLabel = ["HP","MP","力","体力","知力","精神","素早さ","器用さ"];
  var html_code;

  html_code = "";
  html_code += '<tr bgcolor="#CCCCCC">';
  html_code += '<td width="120">アスタリスク</td>';
  tblLabel.forEach(function(value, index) {
    html_code += '<td width="50">' + value + '</td>';
  });
  html_code += '</tr>';

  tblAstarisk.forEach(function(value, index) {
    var ast = value;
    html_code += (index % 2 == 0) ?  '<tr>' : '<tr bgcolor="#CCCCCC">' ;
    html_code += '<td>' + ast[0] + '</td>';
    html_code += '<td>' + (Math.floor((c.HP * ast[9])  * c.ABIdata[0])) + '</td>';
    html_code += '<td>' + (Math.floor((c.MP * ast[10]) * c.ABIdata[1])) + '</td>';
    html_code += '<td>' + (Math.floor(c.STR * ast[11]) + c.ABIdata[2])  + '</td>';
    html_code += '<td>' + (Math.floor(c.VIT * ast[12]) + c.ABIdata[3])  + '</td>';
    html_code += '<td>' + (Math.floor(c.INT * ast[13]) + c.ABIdata[4])  + '</td>';
    html_code += '<td>' + (Math.floor(c.MEN * ast[14]) + c.ABIdata[5])  + '</td>';
    html_code += '<td>' + (Math.floor(c.AGI * ast[15]) + c.ABIdata[6])  + '</td>';
    html_code += '<td>' + (Math.floor(c.DEX * ast[16]) + c.ABIdata[7])  + '</td>';
    html_code += '</tr>';
  });

  html_code += '<tr bgcolor="#CCCCCC">';
  html_code += '<td width="120">アスタリスク</td>';
  tblLabel.forEach(function(value, index) {
    html_code += '<td width="50">' + value + '</td>';
  });
  html_code += '</tr>';

  document.getElementById("ast_status").innerHTML = html_code;
}

function init() {
  var html_code;

  html_code = "";
  tblAstarisk.forEach(function(value, index) {
    html_code += '<option value=' + index + '>' + value[0] + '</option>';
  });
  document.data.AST.innerHTML = html_code;

  tblCharaCurrent = tblCharaMaster[parseInt(document.data.CharaRank.value)];
  html_code = "";
  tblCharaCurrent.forEach(function(value, index) {
    html_code += '<option value=' + index + '>' + value[0] + '</option>';
  });
  document.data.Chara.innerHTML = html_code;

  charaload();
}

window.addEventListener("load", function() {
  init();
}, false);
