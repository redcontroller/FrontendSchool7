//svg 전체 선택
      const purse = document.querySelector(".pursing");
      //svg 내부의 path 선택
      const path = document.querySelector("#path");
      const pathLength = path.getTotalLength();
      const totalLength = `${pathLength} ${pathLength}`;
      path.style.strokeDasharray = pathLength / 2;
      path.style.strokeDashoffset = totalLength;
      const pursing = {
        strokeDashoffset: [pathLength, -pathLength],
      };
      const timing = {
        duration: 2000,
        iterations: Infinity,
      };
      purse.animate(pursing, timing);