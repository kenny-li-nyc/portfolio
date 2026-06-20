// ---------------------------------------------------------------------------
// CONTENT — this is the part you'll edit most. Replace placeholder text,
// numbers, and links with your real details. Each entry below maps to one
// file in the sidebar.
// ---------------------------------------------------------------------------

const automationData = {
  cdrivecleanup: {
    title: 'Enterprise C: Drive Cleanup Automation',
    currentView: 'before',
    beforeLabel: 'Disk space issues were handled reactively. Engineers investigated individual servers, identified removable files, performed cleanup manually, and retried failed patching activities.',
    afterLabel: 'A distributed automation solution proactively maintains disk space across thousands of Windows servers by executing cleanup locally as Local System, eliminating the need for a privileged service account while reducing manual intervention and providing centralized reporting for operational visibility.',
    beforeSteps: [
      'Disk space alert generated',
      'Engineer investigates server',
      'Identify cleanup candidates',
      'Perform manual cleanup',
      'Validate free space',
      'Retry patching or maintenance activity'
    ],
    afterSteps: [
      'Scheduled task executes locally as Local System',
      'Retention-based cleanup policies run automatically',
      'Cleanup results forwarded to central reporting',
      'Most servers remain patch-ready without intervention',
      'Exception servers identified for targeted investigation'
    ],
    metrics: [
      { label: 'servers covered', value: '7,000+' },
      { label: 'manual cleanup', value: '↓ significantly' },
      { label: 'patching reliability', value: '↑ improved' }
    ]
  },
  hp: {
    title: 'HPE iLO / IML Hardware Failure Detection Automation',
    currentView: 'before',
    beforeLabel: 'Hardware failure signals were inconsistently detected through monitoring tools or discovered manually during data center walkthroughs, sometimes after predictive disk warnings had already progressed to active failure conditions.',
    afterLabel: 'A read-only automation framework continuously collects HPE iLO Integrated Management Log (IML) telemetry via Redfish API, evaluates hardware health signals, and automatically triggers ServiceNow workflows when failure risk or telemetry issues are detected.',
    beforeSteps: [
      'Hardware health alerts inconsistent or delayed',
      'Predictive disk failures sometimes missed in monitoring systems',
      'Issues discovered during manual data center walkthroughs',
      'Manual investigation initiated after discovery',
      'ServiceNow ticket created manually',
      'Change and remediation process started after delay'
    ],
    afterSteps: [
      'Scheduled automation queries HPE iLO via Redfish API using read-only account',
      'IML logs collected and parsed for hardware failure indicators',
      'Disk predictive failure or telemetry issues detected automatically',
      'ServiceNow RITM created with full diagnostic context',
      'MAC change request generated in draft mode',
      'Tickets assigned to server operations queue for remediation',
      'End-to-end hardware failure workflow initiated without manual discovery'
    ],
    metrics: [
      { label: 'failure detection', value: '🔍 automated telemetry' },
      { label: 'ticket latency', value: '⚡ near real-time' },
      { label: 'risk reduction', value: '🛡 earlier detection' }
    ]
  }
};

const files = {
  readme: {
    label: 'README.md',
    body: `
          <p class="doc-comment">PS C:&#92;Portfolio&gt; <span class="doc-accent">whoami</span></p>
          <h1>Kenny Li</h1>
          <p>Senior Infrastructure Engineer</p>
          <p>I design, operate, and automate large-scale Windows environments for
          organizations that can't afford downtime. Currently the US regional lead
          for Windows server operations at a global financial institution,
          supporting thousands of servers and tens of thousands of users.</p>
          <p>13+ years doing this. Started in managed services, learned fast that
          the job is building systems that prevent problems, not just responding
          to them.</p>
          
          <p class="doc-comment">PS C:&#92;Portfolio&gt; <span class="doc-accent">Get-Current</span></p>
          <p>Currently exploring how Windows infrastructure intersects with security and
          identity boundaries, specifically, how AD, endpoint controls, and access management
          hold up at scale. <a href="https://kenny-li-nyc.github.io/endpoint-security-at-scale/index.html" target="_blank" rel="noopener">endpoint-security-at-scale</a>
          is where some of that exploration lives right now.</p>
          
          <p class="doc-comment">PS C:&#92;Portfolio&gt; <span class="doc-accent">Get-Help</span></p>
          <p>Use the file explorer on the left, or the command bar — type
          <code>help</code> for the full list, or jump straight to
          <code>Get-Skills</code> or <code>Get-Resume</code>.</p>
    `
  },

  help: {
    label: 'help.txt',
    body: `
      <h2>Available Commands</h2>
      <p class="doc-comment">// Type these into the command bar below and press Enter</p>
      <table style="width: 100%; max-width: 600px; font-size: 14px; border-collapse: collapse; margin-top: 15px;">
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px 0; color: var(--keyword); font-family: monospace;">Get-ReadMe</td>
          <td style="color: var(--text-secondary); padding-left: 15px;">Open the main about / intro page</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px 0; color: var(--keyword); font-family: monospace;">Get-Skills</td>
          <td style="color: var(--text-secondary); padding-left: 15px;">View skills.json interactive matrix</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px 0; color: var(--keyword); font-family: monospace;">Get-CdriveCleanup</td>
          <td style="color: var(--text-secondary); padding-left: 15px;">View C: Drive cleanup automation case study</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px 0; color: var(--keyword); font-family: monospace;">Get-HpFailure</td>
          <td style="color: var(--text-secondary); padding-left: 15px;">View HPE iLO hardware detection telemetry</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px 0; color: var(--keyword); font-family: monospace;">Get-Resume</td>
          <td style="color: var(--text-secondary); padding-left: 15px;">Open and download resume.pdf</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: var(--keyword); font-family: monospace;">Get-Help / help / ls / dir</td>
          <td style="color: var(--text-secondary); padding-left: 15px;">Display this command manual</td>
        </tr>
      </table>
    `
  },

  cdrivecleanup: { label: 'Cdrive-Cleanup.md', isAutomation: true, key: 'cdrivecleanup' },
  hp: { label: 'get-hpfailure.md', isAutomation: true, key: 'hp' },

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

const certifications = [
  { name: 'Azure Solutions Architect Expert', issuer: 'Microsoft', year: '2023' },
  { name: 'Citrix Certified Professional, Virtualization (CCP-V)', issuer: 'Citrix', year: '2023' },
  { name: 'Identity and Access Administrator Associate', issuer: 'Microsoft', year: '2023' },
  { name: 'AWS Certified SysOps Administrator, Associate', issuer: 'Amazon Web Services', year: '2021' },
  { name: 'Security, Compliance, and Identity Fundamentals', issuer: 'Microsoft', year: '2021' }
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
  
  const certsHtml = certifications.map(c => `
    <div class="cert-badge">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>
      <div>
        <p class="cert-name">${c.name}</p>
        <p class="cert-issuer">${c.issuer} &middot; ${c.year}</p>
      </div>
    </div>
  `).join('');

  return `
    <h2>skills.json</h2>
    <p class="doc-comment">// click a card to see why it matters at scale</p>
    <div class="skills-grid">${cardsHtml}</div>
    <div class="skill-tag-row">${tagsHtml}</div>
    <p class="doc-comment" style="margin-top:1.5rem;">// certifications</p>
    <div class="cert-row">${certsHtml}</div>
  `;
}

function renderAutomationContent(key) {
  const d = automationData[key];
  const view = d.currentView || 'before'; // Fallback to before if undefined

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
      <button class="toggle-btn ${view === 'before' ? 'active' : ''}" data-view="before">Before</button>
      <button class="toggle-btn ${view === 'after' ? 'active' : ''}" data-view="after">After</button>
    </div>
    <p class="doc-comment automation-caption" data-view="before" style="${view === 'before' ? '' : 'display:none;'}">${d.beforeLabel}</p>
    <p class="doc-comment automation-caption" data-view="after" style="${view === 'after' ? '' : 'display:none;'}">${d.afterLabel}</p>
    <div class="before-list" data-view="before" style="${view === 'before' ? '' : 'display:none;'}">${beforeRows}</div>
    <div class="after-flow" data-view="after" style="${view === 'after' ? '' : 'display:none;'}">${afterRows}</div>
    <div class="metric-row" data-view="after" style="${view === 'after' ? '' : 'display:none;'}">${metricsHtml}</div>
  `;
}

function attachAutomationHandlers() {
  document.querySelectorAll('.automation-toggle').forEach(toggle => {
    const buttons = toggle.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        
        // CRITICAL FIX: Save the chosen view to the active file's data model
        if (automationData[activeFile]) {
          automationData[activeFile].currentView = view;
        }

        buttons.forEach(b => b.classList.toggle('active', b === btn));
        
        // Toggle the visibility elements on the screen
        toggle.parentElement.querySelectorAll('[data-view]').forEach(el => {
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
    <p class="doc-comment"></p>
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
  // 1. Remove the closed tab from our tracking array
  openTabs = openTabs.filter(t => t !== id);
  
  // 2. If the tab we just closed was the one currently on screen
  if (activeFile === id) {
    // Set the active file to the last remaining open tab (or null if none are left)
    activeFile = openTabs[openTabs.length - 1] || null;
    
    // Update the main editor pane content right away
    if (activeFile) {
      editorPane.innerHTML = getFileHtml(activeFile);
      if (files[activeFile].isSkills) attachSkillCardHandlers();
      if (files[activeFile].isAutomation) attachAutomationHandlers();
    } else {
      editorPane.innerHTML = '';
    }
  }
  
  // 3. CRITICAL FIX: These always run now, perfectly updating the UI 
  // whether you closed a background tab or the active tab!
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
  'get-cdrivecleanup': 'cdrivecleanup',
  'get-hpfailure': 'hp',
  'get-automation': 'cdrivecleanup'
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

  // Intercept help system commands and open our virtual file
  if (cmd === 'help' || cmd === 'ls' || cmd === 'dir' || cmd === 'get-help') {
    openFile('help');
    showCmdFeedback('Returned system help schema successfully.', false);
    return;
  }

  // Handle mapped file commands
  if (commandMap[cmd]) {
    const targetFileId = commandMap[cmd];
    openFile(targetFileId);
    showCmdFeedback(`Successfully initialized terminal view for: ${files[targetFileId].label}`, false);
    return;
  }

  // Gracefully catch unrecognized parameters
  showCmdFeedback(`The term '${raw}' is not recognized as the name of a cmdlet or script. Type 'help' to see options.`, true);
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
