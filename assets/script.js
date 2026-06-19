// ---------------------------------------------------------------------------
// CONTENT — this is the part you'll edit most. Replace placeholder text,
// numbers, and links with your real details. Each entry below maps to one
// file in the sidebar.
// ---------------------------------------------------------------------------

const automationData = {
  ad: {
    title: 'New hire account provisioning',
    beforeLabel: 'Manual provisioning across AD, Exchange, and Citrix — roughly 12 steps per new hire, done by hand from an HR ticket.',
    afterLabel: 'One trigger from the HR ticketing system kicks off a script that creates the AD object, mailbox, group memberships, and Citrix entitlement, then logs the change automatically.',
    beforeSteps: [
      'Receive HR ticket',
      'Create AD user object',
      'Assign group memberships',
      'Provision Exchange mailbox',
      'Configure Citrix entitlement',
      'Update documentation'
    ],
    afterSteps: [
      'HR system triggers webhook',
      'Script validates identity',
      'Automated provisioning runs',
      'Logs updated in system'
    ],
    metrics: [
      { label: 'time per request', value: '45 min &rarr; 3 min' },
      { label: 'manual steps', value: '12 &rarr; 1' },
      { label: 'errors since rollout', value: '0' }
    ]
  },
  cert: {
    title: 'Certificate expiry monitoring',
    beforeLabel: 'Certificate expirations were tracked in a spreadsheet. Two outages in one year traced back to renewals that slipped through.',
    afterLabel: 'An automated job scans certificate stores and sends alerts at 30/14/7 days out, with an escalation if nothing\'s acted on.',
    beforeSteps: [
      'Track certs in spreadsheet',
      'Manual review of expiry dates',
      'Email reminders sent manually',
      'Risk of human error'
    ],
    afterSteps: [
      'Automated scan of cert stores',
      'Alerts sent at 30/14/7 days',
      'Escalation if no action taken'
    ],
    metrics: [
      { label: 'missed renewals', value: '0' },
      { label: 'lead time', value: '30 days' }
    ]
  }
};

const files = {
  readme: {
    label: 'README.md',
    body: `
          <p class="doc-comment">PS C:\Portfolio&gt; <span class="doc-accent">whoami</span></p>
          <h1>Kenny Li</h1>
          <p>Senior Infrastructure Engineer</p>
          <p>I design, operate, and automate large-scale Windows environments for
          organizations that can't afford downtime. Currently the US regional lead
          for Windows server operations at a global financial institution,
          supporting thousands of servers and tens of thousands of users.</p>
          <p>13+ years doing this. Started in managed services, learned fast that
          the job is building systems that prevent problems, not just responding
          to them.</p>
          
          <p class="doc-comment">PS C:\Portfolio&gt; <span class="doc-accent">Get-Current</span></p>
          <p>Currently exploring how Windows infrastructure intersects with security and
          identity boundaries, specifically, how AD, endpoint controls, and access management
          hold up at scale. <a href="https://kenny-li-nyc.github.io/endpoint-security-at-scale/index.html" target="_blank" rel="noopener">endpoint-security-at-scale</a>
          is where some of that exploration lives right now.</p>
          
          <p class="doc-comment">PS C:\Portfolio&gt; <span class="doc-accent">Get-Help</span></p>
          <p>Use the file explorer on the left, or the command bar — type
          <code>help</code> for the full list, or jump straight to
          <code>Get-Skills</code> or <code>Get-Resume</code>.</p>
    `
  },

  ad: { label: 'ad-provisioning.md', isAutomation: true, key: 'ad' },
  cert: { label: 'cert-renewal.md', isAutomation: true, key: 'cert' },

  skills: {
    label: 'skills.json',
    isSkills: true
  },

  resume: {
    label: 'resume.pdf',
    isResume: true
  }
};

// Skills that get the flip-card treatment — keep this list short (4-6).
// "insight" should sound like something only someone senior would say.
const flipSkills = [
  {
  name: 'Automation',
  insight: "Most operational problems don't need more people. They need a repeatable process. I look for the work that happens every day and ask why a human is still doing it.",
  icon: 'M4 17l6-6-6-6M12 19h8'
  },
  {
  name: 'Active Directory',
  insight: "Active Directory is less about authentication and more about control. A well-designed directory defines how risk, access, and operational ownership flow through the environment.",
  icon: 'M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z'
  },
  {
  name: 'Identity & Access',
  insight: "Every privileged account is a potential blast radius. The goal isn't to make administration harder. It's to make compromise harder while keeping operations practical.",
  icon: 'M12 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2'
  },
  {
  name: 'Azure Architecture',
  insight: "Cloud doesn't remove complexity. It changes where the complexity lives. Good architecture makes the operational model predictable before the first workload is deployed.",
  icon: 'M7 16a4 4 0 010-8 5 5 0 019.6-1.5A4.5 4.5 0 0117 16H7z'
  },
  {
    name: 'Hybrid Cloud',
    insight: "Hybrid isn't a transition state. For most enterprises, it's the permanent one. The real decision isn't what to move to the cloud, it's what actually benefits from moving versus what just relocates the same risk somewhere more expensive.",
    icon: 'M7 7l-3 3 3 3M17 7l3 3-3 3M4 10h16'
  }
  ];

// Plain tags — no flip, just a fast scan for keyword matching.
const plainTags = [
  'Entra ID', 'GPO', 'DNS / DHCP / DFS', 'VMware / Hyper-V', 'RDS', 'Azure / AWS',
  'Azure Arc', 'Python', 'Ansible', 'Terraform', 'Azure Monitor / Log Analytics', 'Splunk', 'SCOM', 'Backup & DR',
  'SRE', 'Copilot / ChatGPT / Claude', 'Github / Gitlab', 'Grafana'
];

// ---------------------------------------------------------------------------
// RENDERING — shouldn't need to touch this unless you're changing behavior.
// ---------------------------------------------------------------------------

let openTabs = [];
let activeFile = null;

const tabbar = document.getElementById('tabbar');
const editorPane = document.getElementById('editorPane');

function renderSkillsContent() {
  const cardsHtml = flipSkills.map((s, i) => `
    <div class="flip-card" data-index="${i}" tabindex="0" role="button" aria-label="${s.name}, press to reveal detail">
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${s.icon}"/></svg>
          <p class="name">${s.name}</p>
        </div>
        <div class="flip-face flip-back"><p>${s.insight}</p></div>
      </div>
    </div>
  `).join('');

  const tagsHtml = plainTags.map(t => `<span class="skill-tag">${t}</span>`).join('');

  return `
    <h2>skills.json</h2>
    <p class="doc-comment">// click a card to see why it matters at scale</p>
    <div class="skills-grid">${cardsHtml}</div>
    <div class="skill-tag-row">${tagsHtml}</div>
  `;
}

function renderAutomationContent(key) {
  const d = automationData[key];
  const beforeRows = d.beforeSteps.map((s, i) => `
    <div class="before-step">
      <span class="before-step-num">${i + 1}</span><span>${s}</span>
    </div>
  `).join('');
  const afterRows = d.afterSteps.map((s, i) => `
    ${i > 0 ? '<div class="after-arrow">&darr;</div>' : ''}
    <div class="after-step"><span>${s}</span></div>
  `).join('');
  const metricsHtml = d.metrics.map(m => `
    <div class="metric-card"><p class="label">${m.label}</p><p class="value">${m.value}</p></div>
  `).join('');
  return `
    <h2>${d.title}</h2>
    <div class="automation-toggle">
      <button class="toggle-btn active" data-view="before">Before</button>
      <button class="toggle-btn" data-view="after">After</button>
    </div>
    <p class="doc-comment automation-caption" data-view="before">${d.beforeLabel}</p>
    <p class="doc-comment automation-caption" data-view="after" style="display:none;">${d.afterLabel}</p>
    <div class="before-list" data-view="before">${beforeRows}</div>
    <div class="after-flow" data-view="after" style="display:none;">${afterRows}</div>
    <div class="metric-row">${metricsHtml}</div>
  `;
}

function attachAutomationHandlers() {
  document.querySelectorAll('.automation-toggle').forEach(toggle => {
    const buttons = toggle.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        buttons.forEach(b => b.classList.toggle('active', b === btn));
        document.querySelectorAll('[data-view]').forEach(el => {
          if (el.classList.contains('toggle-btn')) return;
          el.style.display = el.dataset.view === view ? '' : 'none';
        });
      });
    });
  });
}

function renderResumeContent() {
  return `
    <h2>resume.pdf</h2>
    <p class="doc-comment">// one page, ATS-friendly, no gimmicks</p>
    <div class="resume-block">
      <iframe class="resume-frame" src="./assets/resume.pdf" title="Resume preview"></iframe>
      <a class="btn" href="./assets/resume.pdf" download>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
        Download resume
      </a>
    </div>
  `;
}

function getFileHtml(id) {
  const f = files[id];
  if (f.isSkills) return renderSkillsContent();
  if (f.isAutomation) return renderAutomationContent(f.key);
  if (f.isResume) return renderResumeContent();
  return f.body;
}

function renderTabs() {
  tabbar.innerHTML = openTabs.map(id => `
    <div class="tab ${id === activeFile ? 'active' : ''}" data-id="${id}" role="tab" aria-selected="${id === activeFile}" tabindex="0">
      <span>${files[id].label}</span>
      <button class="tab-close" data-close="${id}" aria-label="Close ${files[id].label}">&times;</button>
    </div>
  `).join('');

  tabbar.querySelectorAll('.tab').forEach(tabEl => {
    tabEl.addEventListener('click', (e) => {
      if (e.target.closest('.tab-close')) return;
      openFile(tabEl.dataset.id);
    });
  });
  tabbar.querySelectorAll('.tab-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeTab(btn.dataset.close);
    });
  });
}

function renderSidebarActive() {
  document.querySelectorAll('.file-item').forEach(el => {
    el.classList.toggle('active', el.dataset.file === activeFile);
  });
}

function attachSkillCardHandlers() {
  document.querySelectorAll('.flip-card').forEach(card => {
    const flip = () => card.classList.toggle('flipped');
    card.addEventListener('click', flip);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
    });
  });
}

function openFile(id) {
  activeFile = id;
  if (!openTabs.includes(id)) openTabs.push(id);
  renderTabs();
  renderSidebarActive();
  editorPane.innerHTML = getFileHtml(id);
  if (files[id].isSkills) attachSkillCardHandlers();
  if (files[id].isAutomation) attachAutomationHandlers();
  if (window.innerWidth <= 760) closeSidebar();
}

function closeTab(id) {
  openTabs = openTabs.filter(t => t !== id);
  if (activeFile === id) {
    activeFile = openTabs[openTabs.length - 1] || null;
    if (activeFile) {
      renderTabs();
      renderSidebarActive();
      editorPane.innerHTML = getFileHtml(activeFile);
      if (files[activeFile].isSkills) attachSkillCardHandlers();
      if (files[activeFile].isAutomation) attachAutomationHandlers();
      return;
    }
    editorPane.innerHTML = '';
  }
  renderTabs();
  renderSidebarActive();
}

document.querySelectorAll('.file-item').forEach(el => {
  el.addEventListener('click', () => openFile(el.dataset.file));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') openFile(el.dataset.file);
  });
});

// ---------------------------------------------------------------------------
// Command bar — typed navigation alongside the file explorer
// ---------------------------------------------------------------------------

const commandMap = {
  'get-resume': 'resume',
  'get-skills': 'skills',
  'get-readme': 'readme',
  'get-about': 'readme',
  'get-ad-provisioning': 'ad',
  'get-cert-renewal': 'cert',
  'get-automation': 'ad'
};

const cmdInput = document.getElementById('cmdInput');
const cmdFeedback = document.getElementById('cmdFeedback');
let feedbackTimer = null;

function showCmdFeedback(message, isError) {
  cmdFeedback.textContent = message;
  cmdFeedback.classList.toggle('error', Boolean(isError));
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => { cmdFeedback.textContent = ''; }, 4000);
}

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return;

  if (cmd === 'help' || cmd === 'ls' || cmd === 'get-help') {
    showCmdFeedback('commands: ' + Object.keys(commandMap).join(', '), false);
    return;
  }

  if (commandMap[cmd]) {
    openFile(commandMap[cmd]);
    showCmdFeedback(`opened ${files[commandMap[cmd]].label}`, false);
    return;
  }

  showCmdFeedback(`'${raw}' is not recognized. Type help for a list of commands.`, true);
}

cmdInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    runCommand(cmdInput.value);
    cmdInput.value = '';
  }
});

// ---------------------------------------------------------------------------
// Mobile sidebar toggle
// ---------------------------------------------------------------------------

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarToggle.setAttribute('aria-expanded', 'false');
}

sidebarToggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  sidebarToggle.setAttribute('aria-expanded', String(open));
});

// Initial state — open README on load
openFile('readme');
