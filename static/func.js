
(function () {

      const link = document.querySelectorAll('nav > .hover-this');
      const cursor = document.querySelector('.cursor');

      const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

})();

document.querySelectorAll('.hover-this').forEach(item => {
  item.addEventListener('mouseover', () => {
    document.querySelectorAll('.cursor').forEach(cursor => {
      cursor.classList.add('large');
    });
  });

  item.addEventListener('mouseout', () => {
    document.querySelectorAll('.cursor').forEach(cursor => {
      cursor.classList.remove('large');
    });
  });
});

document.querySelectorAll('.hover-this-2').forEach(item => {
  item.addEventListener('mouseover', () => {
    document.querySelectorAll('.cursor').forEach(cursor => {
      cursor.classList.add('large-2');
    });
  });

  item.addEventListener('mouseout', () => {
    document.querySelectorAll('.cursor').forEach(cursor => {
      cursor.classList.remove('large-2');
    });
  });
});

var embed = new Twitch.Embed('twitch-embed', {
  channel: 'cerberus__esports'
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
  console.log('The video is ready');
});

function menu() {
    cls = document.querySelector(".menu")
    console.log(cls.classList)
    if (cls.classList.contains("d-none")) {
        cls.classList.remove("d-none")
    } else {
        cls.classList.add("d-none")
    }
}