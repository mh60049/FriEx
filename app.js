function setupContents() {
  document.getElementById('head1id').textContent='I am learning JavaScript Now.';

  //Create Start button under div 1
  const btnStart = document.createElement('button');
  btnStart.className='button1';
  btnStart.textContent='Click to Start';
  btnStart.onclick=toStart;
  document.getElementById('div1id').appendChild(btnStart);

  const imgStop = document.createElement('img');
  imgStop.className="image1";
  imgStop.onclick=toStop;
  imgStop.src="stop.jpg";
  document.getElementById('div2id').appendChild(imgStop);
}

function toStart() {
  const spn2 = document.createElement('span');
  spn2.className="spn2";
  spn2.textContent="Started!";
  document.getElementById("div1id").appendChild(spn2);
}

function toStop() {
  const spn3 = document.createElement('span');
  spn3.className="spn3";
  spn3.id = "spn3id";
  spn3.textContent="Stopped!";
  document.getElementById("div2id").appendChild(spn3);
}

setupContents();