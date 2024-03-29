export const formatAmount = (value: number) => {
  const formated = value.toFixed(8).replace(/\.?0+$/, "");
  if(formated.length>12){
    return formated.substring(0,12)
  }
  return formated;
}
  

export const validInput = (value: string) => {
  //const regex = /^[0-9]-?\d*\.?\d{0,8}$/;
  return (/* (regex.test(value) || value === "") && */ value.length < 10)
}

export const numberToFixed = (value: string) => {
  const parsedValue = Number(value);
  if (isNaN(parsedValue)) {
    return "";
  }

  return (parsedValue / 100000000).toFixed(4).replace(/\.?0+$/, "");
}
