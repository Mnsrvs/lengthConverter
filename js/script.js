let input = document.querySelector("#unit");
let result = document.querySelector("#result");
let unitType = document.querySelector("#unitType");
let resultType = document.querySelector("#resultType");
let resetButton = document.querySelector("#resetButton")
let unitTypeValue, resultTypeValue;

// eventlistener
input.addEventListener("keyup", myResult);
unitType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);
resetButton.addEventListener("click", resetUnit);

function myResult() {
  unitTypeValue = unitType.value;
  resultTypeValue = resultType.value;

  // Meter conversion formula
  if (unitTypeValue === "meter" && resultTypeValue === "meter") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "meter" && resultTypeValue === "kilometer") {
    result.value = unit.value * 0.001;
  } else if (unitTypeValue === "meter" && resultTypeValue === "centimeter") {
    result.value = unit.value * 100;
  } else if (unitTypeValue === "meter" && resultTypeValue === "millimeter") {
    result.value = unit.value * 1000;
  } else if (unitTypeValue === "meter" && resultTypeValue === "micrometer") {
    result.value = unit.value * 1e+6;
  } else if (unitTypeValue === "meter" && resultTypeValue === "nanometer") {
    result.value = unit.value * 1e+9;
  } else if (unitTypeValue === "meter" && resultTypeValue === "mile") {
    result.value = unit.value / 1609;
  } else if (unitTypeValue === "meter" && resultTypeValue === "yard") {
    result.value = unit.value * 1.094;
  } else if (unitTypeValue === "meter" && resultTypeValue === "foot") {
    result.value = unit.value * 3.281;
  } else if (unitTypeValue === "meter" && resultTypeValue === "inch") {
    result.value = unit.value * 39.37;
  }

  // Kilometer conversion formula
  if (unitTypeValue === "kilometer" && resultTypeValue === "meter") {
    result.value = unit.value * 1000;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "kilometer") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "centimeter") {
    result.value = unit.value * 100000;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "millimeter") {
    result.value = unit.value * 1e+6;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "micrometer") {
    result.value = unit.value * 1e+9;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "nanometer") {
    result.value = unit.value * 1e+12;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "mile") {
    result.value = unit.value / 1.609;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "yard") {
    result.value = unit.value * 1094;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "foot") {
    result.value = unit.value * 3281;
  } else if (unitTypeValue === "kilometer" && resultTypeValue === "inch") {
    result.value = unit.value * 39370;
  }

  // Centimeter conversion formula
  if (unitTypeValue === "centimeter" && resultTypeValue === "meter") {
    result.value = unit.value / 39.37;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "kilometer") {
    result.value = unit.value / 100000;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "centimeter") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "millimeter") {
    result.value = unit.value * 10;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "micrometer") {
    result.value = unit.value * 10000;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "nanometer") {
    result.value = unit.value * 1e+7;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "mile") {
    result.value = unit.value / 160900;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "yard") {
    result.value = unit.value / 91.44;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "foot") {
    result.value = unit.value / 30.48;
  } else if (unitTypeValue === "centimeter" && resultTypeValue === "inch") {
    result.value = unit.value / 2.54;
  }

  // Millimeter conversion formula
  if (unitTypeValue === "millimeter" && resultTypeValue === "meter") {
    result.value = unit.value / 1000;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "kilometer") {
    result.value = unit.value / 1e+6;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "centimeter") {
    result.value = unit.value / 10;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "millimeter") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "micrometer") {
    result.value = unit.value * 1000;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "nanometer") {
    result.value = unit.value * 1e+6;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "mile") {
    result.value = unit.value / 1.609e+6;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "yard") {
    result.value = unit.value / 914.4;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "foot") {
    result.value = unit.value / 304.8;
  } else if (unitTypeValue === "millimeter" && resultTypeValue === "inch") {
    result.value = unit.value / 25.4;
  }

  // Micrometer conversion formula
  if (unitTypeValue === "micrometer" && resultTypeValue === "meter") {
    result.value = unit.value / 1e+6;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "kilometer") {
    result.value = unit.value / 1e+9;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "centimeter") {
    result.value = unit.value / 10000;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "millimeter") {
    result.value = unit.value / 1000;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "micrometer") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "nanometer") {
    result.value = unit.value * 1000;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "mile") {
    result.value = unit.value / 1.609e+9;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "yard") {
    result.value = unit.value / 914400;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "foot") {
    result.value = unit.value / 304800;
  } else if (unitTypeValue === "micrometer" && resultTypeValue === "inch") {
    result.value = unit.value / 25400;
  }

  // Nanometer conversion formula
  if (unitTypeValue === "nanometer" && resultTypeValue === "meter") {
    result.value = unit.value / 1e+9;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "kilometer") {
    result.value = unit.value / 1e+12;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "centimeter") {
    result.value = unit.value / 1e+7;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "millimeter") {
    result.value = unit.value / 1e+6;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "micrometer") {
    result.value = unit.value / 1000;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "nanometer") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "mile") {
    result.value = unit.value / 1.609e+12;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "yard") {
    result.value = unit.value / 9.144e+8;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "foot") {
    result.value = unit.value / 3.048e+8;
  } else if (unitTypeValue === "nanometer" && resultTypeValue === "inch") {
    result.value = unit.value / 2.54e+7;
  }

  // Mile conversion formula
  if (unitTypeValue === "mile" && resultTypeValue === "meter") {
    result.value = unit.value * 1609;
  } else if (unitTypeValue === "mile" && resultTypeValue === "kilometer") {
    result.value = unit.value * 1.609;
  } else if (unitTypeValue === "mile" && resultTypeValue === "centimeter") {
    result.value = unit.value * 160900;
  } else if (unitTypeValue === "mile" && resultTypeValue === "millimeter") {
    result.value = unit.value * 1.609e+6;
  } else if (unitTypeValue === "mile" && resultTypeValue === "micrometer") {
    result.value = unit.value * 1.609e+9;
  } else if (unitTypeValue === "mile" && resultTypeValue === "nanometer") {
    result.value = unit.value * 1.609e+12;
  } else if (unitTypeValue === "mile" && resultTypeValue === "mile") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "mile" && resultTypeValue === "yard") {
    result.value = unit.value * 1760;
  } else if (unitTypeValue === "mile" && resultTypeValue === "foot") {
    result.value = unit.value * 5280;
  } else if (unitTypeValue === "mile" && resultTypeValue === "inch") {
    result.value = unit.value * 63360;
  }

  // Yard conversion formula
  if (unitTypeValue === "yard" && resultTypeValue === "meter") {
    result.value = unit.value / 1.094;
  } else if (unitTypeValue === "yard" && resultTypeValue === "kilometer") {
    result.value = unit.value / 1094;
  } else if (unitTypeValue === "yard" && resultTypeValue === "centimeter") {
    result.value = unit.value * 91.44;
  } else if (unitTypeValue === "yard" && resultTypeValue === "millimeter") {
    result.value = unit.value * 914.4;
  } else if (unitTypeValue === "yard" && resultTypeValue === "micrometer") {
    result.value = unit.value * 914400;
  } else if (unitTypeValue === "yard" && resultTypeValue === "nanometer") {
    result.value = unit.value * 9.144e+8;
  } else if (unitTypeValue === "yard" && resultTypeValue === "mile") {
    result.value = unit.value / 1760;
  } else if (unitTypeValue === "yard" && resultTypeValue === "yard") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "yard" && resultTypeValue === "foot") {
    result.value = unit.value * 3;
  } else if (unitTypeValue === "yard" && resultTypeValue === "inch") {
    result.value = unit.value * 36;
  }
  
  // Foot conversion formula
  if (unitTypeValue === "foot" && resultTypeValue === "meter") {
    result.value = unit.value / 3.281;
  } else if (unitTypeValue === "foot" && resultTypeValue === "kilometer") {
    result.value = unit.value / 3281;
  } else if (unitTypeValue === "foot" && resultTypeValue === "centimeter") {
    result.value = unit.value * 30.48;
  } else if (unitTypeValue === "foot" && resultTypeValue === "millimeter") {
    result.value = unit.value * 304.8;
  } else if (unitTypeValue === "foot" && resultTypeValue === "micrometer") {
    result.value = unit.value * 304800;
  } else if (unitTypeValue === "foot" && resultTypeValue === "nanometer") {
    result.value = unit.value * 3.048e+8;
  } else if (unitTypeValue === "foot" && resultTypeValue === "mile") {
    result.value = unit.value / 5280;
  } else if (unitTypeValue === "foot" && resultTypeValue === "yard") {
    result.value = unit.value / 3;
  } else if (unitTypeValue === "foot" && resultTypeValue === "foot") {
    result.value = unit.value * 1;
  } else if (unitTypeValue === "foot" && resultTypeValue === "inch") {
    result.value = unit.value * 12;
  }

  // Inch conversion formula
  if (unitTypeValue === "inch" && resultTypeValue === "meter") {
    result.value = unit.value / 39.37;
  } else if (unitTypeValue === "inch" && resultTypeValue === "kilometer") {
    result.value = unit.value / 39370;
  } else if (unitTypeValue === "inch" && resultTypeValue === "centimeter") {
    result.value = unit.value * 2.54;
  } else if (unitTypeValue === "inch" && resultTypeValue === "millimeter") {
    result.value = unit.value * 25.4;
  } else if (unitTypeValue === "inch" && resultTypeValue === "micrometer") {
    result.value = unit.value * 25400;
  } else if (unitTypeValue === "inch" && resultTypeValue === "nanometer") {
    result.value = unit.value * 2.54e+7;
  } else if (unitTypeValue === "inch" && resultTypeValue === "mile") {
    result.value = unit.value / 63360;
  } else if (unitTypeValue === "inch" && resultTypeValue === "yard") {
    result.value = unit.value / 36;
  } else if (unitTypeValue === "inch" && resultTypeValue === "foot") {
    result.value = unit.value / 12;
  } else if (unitTypeValue === "inch" && resultTypeValue === "inch") {
    result.value = unit.value * 1;
  }
}

// reset input and result
function resetUnit() {
  input.value = "";
  result.value = "";

  document.querySelector("#unit").innerHTML = input;
  document.querySelector("#result").innerHTML = result;
}