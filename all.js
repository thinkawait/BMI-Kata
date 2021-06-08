let bmiHistoryData=[];
const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}
// 您的體重過輕，健康指數為藍色
//您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！
function addLog(bmi,state)
{
  let ob=[];
  ob.bmi=bmi;
  ob.state=state;
  bmiHistoryData.push(ob);
}
function bmiLog(state)
{
  console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);
}
function printBmi(height,weight)
{
  let bmi=(weight/height*100/height*100).toFixed(2);
  let state;
  if(isNaN(weight)||isNaN(height))
  {
    console.log(`請重新輸入身高體重`);
  }else
  {
    if(bmi<18.5)
    {
      state="overThin";
    }else if(bmi<24)
    {
      state="normal";
    }else if(bmi<27)
    {
      state="overWeight";
    }else if(bmi<30)
    {
      state="mildFat";
    }else if(bmi<35)
    {
      state="moderateFat";
    }else{
      state="severeFat";
    }
    bmiLog(state);
    addLog(bmi,state);
  }
}
function showHistoryData()
{
  console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[bmiHistoryData.length-1].bmi}，體重${bmiStatesData[bmiHistoryData[bmiHistoryData.length-1].state].state}！健康指數為${bmiStatesData[bmiHistoryData[bmiHistoryData.length-1].state].color}！`);
}

printBmi(178, 20) ;
printBmi(178, 70) ;
printBmi(178, 85);
showHistoryData();