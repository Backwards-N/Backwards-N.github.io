function textReplace (id, text) {
  var elem = document.getElementById(id);
  elem.innerHTML = text;
}

function update () {
  var firstCode = document.getElementById("c1");
  var secondCode = document.getElementById("c2");
  var shiftFactor = document.getElementById("s");

  textReplace("and", "And (&&): " + capAnd(firstCode.value, secondCode.value));
  textReplace("or", "Or (||): " + capOr(firstCode.value, secondCode.value));
  textReplace("xor", "Xor (^^): " + capXor(firstCode.value, secondCode.value));
  textReplace("ssr", "SRShift (>>>): " + capSsr(firstCode.value, shiftFactor.value));
  textReplace("zsr", "RShift (>>): " + capZsr(firstCode.value, shiftFactor.value));
  textReplace("zsl", "LShift (<<): " + capZsl(firstCode.value, shiftFactor.value));
  textReplace("not", "Not (!!): " + capNot(firstCode.value));
}
