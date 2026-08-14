document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  var applyingFor = document.getElementById('applyingFor');
  var params = new URLSearchParams(window.location.search);
  var applyValue = params.get('apply');

  if (applyValue && applyingFor) {
    var options = applyingFor.options;
    var found = false;
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === applyValue) {
        applyingFor.value = applyValue;
        found = true;
        break;
      }
    }
    if (!found) {
      var other = document.createElement('option');
      other.value = applyValue;
      other.textContent = applyValue;
      other.selected = true;
      applyingFor.insertBefore(other, applyingFor.querySelector('option[value="Other"]'));
    }
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.hidden = true;
      document.querySelector('.contact-info').hidden = true;
      success.hidden = false;
    });
  }
});
