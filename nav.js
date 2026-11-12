// nav.js — single source of truth for the top ribbon
(function () {
  'use strict';

  const PAGES = [
    ['index.html',                    'Home'],
    ['what-should-i-know.html',       'What Should I Know?'],
    ['algebraic-mechanics.html',      'Algebraic Mechanics'],
    ['worked-examples.html',          'Worked Examples'],
    ['exam-practice.html',            'Exam Practice'],
    ['random-practice-generator.html','Random Practice'],
    ['challenge-exam.html',           'Challenge Exam'],
    ['confidence-check.html',         'Confidence Check'],
    ['calculators.html',              'Calculators'],
    ['formula-reference.html',        'Formula Reference'],
    ['graph-explorer.html',           'Graph Explorer'],
    ['study-resources.html',          'Study Resources'],
    ['math-lab-companion.html',       'Math Lab Companion'],
    ['common-mistakes.html',          'Common Mistakes'],
    ['final-exam-cheat-sheet.html',   'Cheat Sheet']
  ];

  function render() {
    // Support an explicit placeholder: <div id="site-nav"></div>
    var mount = document.getElementById('site-nav');

    // Fallback: insert before the first element after the toolbar
    if (!mount) {
      var anchor = document.querySelector('.a11y-bar');
      mount = document.createElement('nav');
      mount.className = 'site-nav';
      mount.setAttribute('aria-label', 'Primary');
      if (anchor && anchor.parentNode) {
        anchor.insertAdjacentElement('afterend', mount);
      } else {
        document.body.insertBefore(mount, document.body.firstChild);
      }
    }

    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    var items = PAGES.map(function (pair) {
      var href = pair[0], label = pair[1];
      var current = href.toLowerCase() === here;
      return '<li><a href="' + href + '"' +
             (current ? ' aria-current="page"' : '') + '>' + label + '</a></li>';
    }).join('');

    mount.innerHTML = '<ul>' + items + '</ul>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
