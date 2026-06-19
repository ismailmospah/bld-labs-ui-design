/* ================================================================
   BLD LABS — contact page · EmailJS integration
================================================================ */
(function contactPage() {
  const SERVICE_ID  = 'service_92197rr';
  const TEMPLATE_ID = 'template_0pkbtri';
  const PUBLIC_KEY  = '-vRpD7rblXOjDMu1N';

  emailjs.init(PUBLIC_KEY);

  const form        = document.getElementById('cform');
  const btn         = document.getElementById('cformBtn');
  const errorBox    = document.getElementById('cformError');
  const successBox  = document.getElementById('cformSuccess');
  const resetBtn    = document.getElementById('cformReset');
  const cfService   = document.getElementById('cfService');
  const cfOtherSvc  = document.getElementById('cfOtherServiceWrap');
  const cfOtherSvcIn= document.getElementById('cfOtherService');
  const cfCountry   = document.getElementById('cfCountry');
  const cfOtherCtr  = document.getElementById('cfOtherCountryWrap');
  const cfOtherCtrIn= document.getElementById('cfOtherCountry');

  /* show/hide "Other" service field */
  cfService.addEventListener('change', () => {
    const isOther = cfService.value === 'other';
    cfOtherSvc.hidden = !isOther;
    cfOtherSvcIn.required = isOther;
  });

  /* show/hide "Other" country field */
  cfCountry.addEventListener('change', () => {
    const isOther = cfCountry.value === 'other';
    cfOtherCtr.hidden = !isOther;
    cfOtherCtrIn.required = isOther;
  });

  /* reset to blank form */
  resetBtn.addEventListener('click', () => {
    form.reset();
    cfOtherSvc.hidden = true;
    cfOtherCtr.hidden = true;
    cfOtherSvcIn.required = false;
    cfOtherCtrIn.required = false;
    successBox.hidden = true;
    form.hidden = false;
    errorBox.hidden = true;
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    errorBox.hidden = true;

    if (!form.checkValidity()) { form.reportValidity(); return; }

    const fd = new FormData(form);

    /* resolve "Other" values */
    const service = cfService.value === 'other'
      ? `Other: ${fd.get('service_other') || ''}`.trim()
      : cfService.value;

    const country = cfCountry.value === 'other'
      ? fd.get('country_other') || ''
      : cfCountry.value;

    const payload = {
      from_name:      fd.get('from_name'),
      whatsapp_number:fd.get('whatsapp_number'),
      country,
      company_name:   fd.get('company_name'),
      service,
      budget:         fd.get('budget') || 'Not specified',
      industry:       fd.get('industry') || 'Not specified',
      message:        fd.get('message') || 'Not specified',
    };

    btn.textContent = 'SENDING…';
    btn.disabled = true;

    try {
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload);
      if (res.status !== 200) throw new Error('send failed');
      form.hidden = true;
      successBox.hidden = false;
    } catch (err) {
      errorBox.textContent = '▮ Something went wrong — please try again or reach us on WhatsApp.';
      errorBox.hidden = false;
    } finally {
      btn.textContent = 'SEND BRIEF →';
      btn.disabled = false;
    }
  });
})();
