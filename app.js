const products = [
  { id: "ddr5", family: "DDR5", team: "PTE", name: "DBJOA", code: "D5-6400-A", versions: 4, tables: 12, updated: "12 分钟前", rank: 1, maintained: true },
  { id: "lpddr5x", family: "LPDDR5X", team: "TYA", name: "DCKTA", code: "LP5X-8533-B", versions: 3, tables: 9, updated: "1 小时前", rank: 2, maintained: true },
  { id: "ddr4", family: "DDR4", team: "PTE", name: "DANUB", code: "D4-3200-C", versions: 6, tables: 18, updated: "昨天", rank: 3 },
  { id: "hbm3e", family: "HBM", team: "TYA", name: "HBRXA", code: "H3E-12H-A", versions: 2, tables: 6, updated: "6 月 29 日", rank: 4 },
  { id: "ddr5-5600", family: "DDR5", team: "PTE", name: "DFMQA", code: "D5-5600-B", versions: 5, tables: 15, updated: "6 月 28 日", rank: 5 },
  { id: "lpddr5x-7500", family: "LPDDR5X", team: "TYA", name: "LPKRA", code: "LP5X-7500-A", versions: 3, tables: 8, updated: "6 月 27 日", rank: 6 },
  { id: "ddr4-2666", family: "DDR4", team: "PTE", name: "DQWPA", code: "D4-2666-D", versions: 7, tables: 20, updated: "6 月 25 日", rank: 7 },
  { id: "hbm3", family: "HBM", team: "TYA", name: "HBMZA", code: "H3-10H-B", versions: 4, tables: 11, updated: "6 月 24 日", rank: 8 },
  { id: "ddr5-4800", family: "DDR5", team: "PTE", name: "DTRLA", code: "D5-4800-C", versions: 6, tables: 17, updated: "6 月 21 日", rank: 9 },
  { id: "lpddr5-6400", family: "LPDDR5X", team: "TYA", name: "LPMEA", code: "LP5X-6400-C", versions: 5, tables: 13, updated: "6 月 18 日", rank: 10 },
  { id: "ddr4-2400", family: "DDR4", team: "PTE", name: "DVNCA", code: "D4-2400-E", versions: 8, tables: 22, updated: "6 月 15 日", rank: 11 },
  { id: "hbm2e", family: "HBM", team: "TYA", name: "HBTKA", code: "H2E-8H-D", versions: 9, tables: 24, updated: "6 月 12 日", rank: 12 }
];

const documents = [
  { id: 1, title: "FT12", product: "DBJOA", productId: "ddr5", program: "development", version: "E0388", mask: ["RevA", "RevB"], ballType: ["245B", "396B"], package: ["DDP", "QDP"], dsa: ["128DUT"], tester: ["T5833HS", "T5833HS2"], fab: ["A1", "A2"], dieType: ["Normal Die"], purpose: "支持新封装组合", action: "调整 BallType 与 Package 映射", checklist: "3/5", edited: "刚刚查看", color: "green", status: "locked", editor: "Jun Li" },
  { id: 2, title: "FT12", product: "DCKTA", productId: "lpddr5x", program: "production", version: "E0320", mask: ["RevB"], ballType: ["396B"], package: ["QDP"], dsa: ["128DUT"], tester: ["T5833HS2"], fab: ["A2"], dieType: ["Normal Die"], purpose: "量产参数收敛", action: "更新 Tester 条件", checklist: "5/5", edited: "18 分钟前", color: "green", status: "available", editor: "" },
  { id: 3, title: "FT12", product: "DANUB", productId: "ddr4", program: "development", version: "E0388", mask: ["RevA", "RevC"], ballType: ["245B"], package: ["DDP", "6DP"], dsa: ["128DUT", "256DUT"], tester: ["T5833HS"], fab: ["A1"], dieType: ["Normal Die", "Half Die"], purpose: "覆盖 Half Die", action: "补充 DieType 测试条件", checklist: "2/5", edited: "昨天", color: "green", status: "available", editor: "" },
  { id: 4, title: "FT12", product: "HBRXA", productId: "hbm3e", program: "production", version: "E0320", mask: ["RevC"], ballType: ["396B"], package: ["QDP"], dsa: ["128DUT"], tester: ["T5833HS2"], fab: ["C1"], dieType: ["Half Die"], purpose: "同步 FAB C1 配置", action: "校准量产参数", checklist: "未生成", edited: "周一", color: "green", status: "readonly", editor: "" },
  { id: 5, title: "FT12", product: "DBJOA", productId: "ddr5", program: "development", version: "E0387", mask: ["RevA"], ballType: ["245B"], package: ["DDP"], dsa: ["128DUT"], tester: ["T5833HS"], fab: ["A1"], dieType: ["Normal Die"], purpose: "稳定性优化", action: "调整电压窗口", checklist: "5/5", edited: "6 月 28 日", color: "green", status: "available", editor: "" },
  { id: 6, title: "FT12", product: "DCKTA", productId: "lpddr5x", program: "production", version: "E0318", mask: ["RevB"], ballType: ["396B"], package: ["QDP", "8DP"], dsa: ["128DUT"], tester: ["T5833HS2"], fab: ["A2"], dieType: ["Half Die"], purpose: "增加 8DP 支持", action: "新增 Package 条件", checklist: "4/5", edited: "6 月 26 日", color: "green", status: "locked", editor: "Yuki Zhang" }
];

const programChanges = {
  E0388: [
    { purpose: "支持新封装组合", actions: ["调整 BallType 与 Package 映射", "补充 DSA 条件", "验证 Tester 兼容性"] },
    { purpose: "覆盖 Half Die", actions: ["补充 DieType 测试条件", "增加 FAB C1 参数"] },
    { purpose: "稳定性优化", actions: ["调整电压窗口", "更新 Timing 参数"] }
  ],
  E0387: [{ purpose: "稳定性优化", actions: ["调整电压窗口", "修正 Retry 配置"] }],
  E0320: [{ purpose: "量产参数收敛", actions: ["更新 Tester 条件", "校准量产参数"] }]
};

const versionSets = [
  { version: "E0388", program: "development", type: "current", state: "当前版本", updated: "今天", rank: 1 },
  { version: "E0387", program: "development", type: "released", state: "已发布", updated: "6 月 28 日", rank: 2 },
  { version: "E0380", program: "development", type: "history", state: "历史版本", updated: "6 月 12 日", rank: 3 },
  { version: "E0375", program: "development", type: "history", state: "历史版本", updated: "5 月 8 日", rank: 4 },
  { version: "E0360", program: "development", type: "history", state: "历史版本", updated: "3 月 27 日", rank: 5 },
  { version: "E0342", program: "development", type: "history", state: "历史版本", updated: "2 月 14 日", rank: 6 },
  { version: "E0320", program: "production", type: "current", state: "当前版本", updated: "昨天", rank: 1 },
  { version: "E0318", program: "production", type: "released", state: "已发布", updated: "6 月 20 日", rank: 2 },
  { version: "E0310", program: "production", type: "history", state: "历史版本", updated: "5 月 26 日", rank: 3 },
  { version: "E0302", program: "production", type: "history", state: "历史版本", updated: "4 月 19 日", rank: 4 },
  { version: "E0290", program: "production", type: "history", state: "历史版本", updated: "2 月 5 日", rank: 5 },
  { version: "E0284", program: "production", type: "history", state: "历史版本", updated: "2025 年 12 月", rank: 6 }
];

const stageTables = [
  { id: 101, stage: "CP", mask: ["RevA", "RevB"], tester: ["T5833HS"], fab: ["A1", "A2"], purpose: "稳定性优化", action: "调整电压窗口", checklist: "4/5", status: "available", editor: "", updated: "今天 09:42" },
  { id: 102, stage: "RDBI", mask: ["RevA"], tester: ["T5833HS2"], fab: ["A1"], purpose: "验证 Tester 兼容性", action: "更新 Tester 条件", checklist: "5/5", status: "available", editor: "", updated: "昨天 16:18" },
  { id: 103, stage: "FT12", mask: ["RevA", "RevB"], ballType: ["245B", "396B"], package: ["DDP", "QDP"], dsa: ["128DUT"], tester: ["T5833HS", "T5833HS2"], fab: ["A1", "A2"], dieType: ["Normal Die"], purpose: "支持新封装组合", action: "调整 BallType 与 Package 映射", checklist: "3/5", status: "locked", editor: "Jun Li", updated: "12 分钟前" },
  { id: 104, stage: "FT12", mask: ["RevC"], ballType: ["245B"], package: ["6DP"], dsa: ["256DUT"], tester: ["T5833HS2"], fab: ["C1"], dieType: ["Half Die"], purpose: "覆盖 Half Die", action: "补充 DieType 测试条件", checklist: "2/5", status: "available", editor: "", updated: "昨天 11:20" },
  { id: 105, stage: "FT34", mask: ["RevB", "RevC"], ballType: ["396B"], package: ["QDP", "8DP"], dsa: ["128DUT"], tester: ["T5833HS2"], fab: ["C1"], dieType: ["Half Die"], status: "readonly", editor: "", updated: "6 月 28 日" }
];

const engineers = [
  { id: 1, name: "Alex Chen", email: "alex.chen@itest", team: "PTE", subteam: "PTE-A", mine: ["ddr5","ddr4"], visible: ["ddr5","ddr4","ddr5-5600","ddr4-2666","ddr5-4800","ddr4-2400"], editable: ["ddr5","ddr4","ddr5-5600","ddr4-2666","ddr5-4800","ddr4-2400"] },
  { id: 2, name: "Yuki Zhang", email: "yuki.zhang@itest", team: "TYA", subteam: "TYA-Alpha", mine: ["lpddr5x"], visible: ["lpddr5x","hbm3e","lpddr5x-7500","hbm3","lpddr5-6400","hbm2e"], editable: ["lpddr5x","lpddr5x-7500","lpddr5-6400"] },
  { id: 3, name: "Ming Wu", email: "ming.wu@itest", team: "PTE", subteam: "PTE-B", mine: ["ddr5-5600"], visible: ["ddr5","ddr4","ddr5-5600","ddr4-2666","ddr5-4800","ddr4-2400"], editable: ["ddr5-5600"] },
  { id: 4, name: "Jun Li", email: "jun.li@itest", team: "PTE", subteam: "PTE-A", mine: ["ddr5"], visible: ["ddr5","ddr4","ddr5-5600","ddr4-2666","ddr5-4800","ddr4-2400"], editable: ["ddr5"] },
  { id: 5, name: "Sara Lin", email: "sara.lin@itest", team: "TYA", subteam: "TYA-Beta", mine: [], visible: ["lpddr5x","hbm3e","lpddr5x-7500","hbm3","lpddr5-6400","hbm2e"], editable: [] },
  { id: 6, name: "Kevin Zhou", email: "kevin.zhou@itest", team: "TYA", subteam: "TYA-Alpha", mine: ["hbm3e"], visible: ["lpddr5x","hbm3e","lpddr5x-7500","hbm3","lpddr5-6400","hbm2e"], editable: ["hbm3e","hbm3","hbm2e"] }
];

let activeFilter = "all";
let activeProduct = "all";
let activeFamily = "all";
let activeScope = "mine";
let productSort = "recent";
let navView = "home";
const workGrid = document.querySelector("#workGrid");
const productGrid = document.querySelector("#productGrid");
const recentProductGrid = document.querySelector("#recentProductGrid");
const productSearch = document.querySelector("#productSearch");
const productCount = document.querySelector("#productCount");
const emptyState = document.querySelector("#emptyState");
const toast = document.querySelector("#toast");
const homeView = document.querySelector("#homeView");
const productsView = document.querySelector("#productsView");
const productDetailView = document.querySelector("#productDetailView");
const editorView = document.querySelector("#editorView");
const adminView = document.querySelector("#adminView");
const adminContent = document.querySelector("#adminContent");
const productPickerMenu = document.querySelector("#productPickerMenu");
const productPickerInput = document.querySelector("#productPickerInput");
const pickerProducts = document.querySelector("#pickerProducts");
const accessPopover = document.querySelector("#accessPopover");
const accessTypes = document.querySelector("#accessTypes");
const accessProducts = document.querySelector("#accessProducts");
const importModal = document.querySelector("#importModal");
const importForm = document.querySelector("#importForm");
const importFile = document.querySelector("#importFile");
const importDropZone = document.querySelector("#importDropZone");
const importFileSummary = document.querySelector("#importFileSummary");
const importTarget = document.querySelector("#importTarget");
const importConflict = document.querySelector("#importConflict");
const confirmImport = document.querySelector("#confirmImport");
const importProduct = document.querySelector("#importProduct");
const importStage = document.querySelector("#importStage");
const importPackageFields = document.querySelector("#importPackageFields");
let pickerFamily = "all";
let activeProgram = "development";
let activeVersion = versionSets[0].version;
let stageStatusFilter = "all";
let stageSortDirection = "desc";
let accessContext = null;
let selectedImportFile = null;
let importOverwriteConfirmed = false;
let editorGridApi = null;
let editorOriginalRows = [];
let editorReturnView = "tables";
let currentEditorTable = null;
let activeChangeContext = null;

if (window.agGrid?.ModuleRegistry && window.agGrid?.AllCommunityModule) window.agGrid.ModuleRegistry.registerModules([window.agGrid.AllCommunityModule]);

function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }

function renderProducts() {
  const query = productSearch.value.trim().toLowerCase();
  const list = products.filter((product) => (activeScope === "all" || product.maintained) && (activeFamily === "all" || product.family === activeFamily) && `${product.name} ${product.code}`.toLowerCase().includes(query)).sort((a, b) => productSort === "az" ? a.name.localeCompare(b.name) : a.rank - b.rank);
  productGrid.innerHTML = list.map((product) => `
    <button class="product-row ${activeProduct === product.id ? "selected" : ""}" data-product="${product.id}">
      <span class="family-tag">${product.family}</span><span class="product-info"><strong>${product.name}${product.maintained ? '<em class="maintained-label">我的产品</em>' : ''}</strong><small>${product.code}</small></span>
      <span class="index-stat"><b>${product.versions}</b><small>版本</small></span><span class="index-stat"><b>${product.tables}</b><small>表格</small></span><span class="index-updated">${product.updated}</span><i data-lucide="chevron-right"></i>
    </button>`).join("");
  productCount.textContent = activeScope === "mine" ? `显示 ${list.length} 个我的产品` : `显示 ${list.length} / 48 个产品`;
  refreshIcons();
}

function renderRecentProducts() {
  recentProductGrid.innerHTML = products.filter((product) => product.maintained).sort((a, b) => a.rank - b.rank).map((product) => `
    <button class="recent-product-card" data-recent-product="${product.id}">
      <span class="family-tag">${product.family}</span><strong>${product.name}</strong><i data-lucide="chevron-right"></i>
    </button>`).join("");
  refreshIcons();
}

function filteredDocuments() {
  const query = "";
  return documents.filter((doc) => {
    const queryMatch = `${doc.title} ${doc.product} ${doc.version}`.toLowerCase().includes(query);
    const filterMatch = activeFilter === "all" || doc.status === activeFilter;
    const productMatch = activeProduct === "all" || doc.productId === activeProduct;
    return queryMatch && filterMatch && productMatch;
  });
}

function statusMarkup(doc) {
  if (doc.status === "locked") return `<span class="status locked"><i data-lucide="lock"></i>${doc.editor} 编辑中</span>`;
  if (doc.status === "readonly") return `<span class="status readonly"><i data-lucide="eye"></i>仅可查看</span>`;
  return `<span class="status available"><i data-lucide="circle-check"></i>可编辑</span>`;
}

function valuesOf(value) { return Array.isArray(value) ? value : value ? [value] : []; }
function compactValues(value) {
  const values = valuesOf(value);
  if (!values.length) return "—";
  return values.length > 2 ? `${values.slice(0, 2).join("、")} +${values.length - 2}` : values.join("、");
}
function valueTags(value) { return valuesOf(value).map((item) => `<span>${item}</span>`).join("") || `<span class="empty-value">—</span>`; }

function renderActiveChangeContext() {
  const purpose = document.querySelector("#activePurpose");
  const action = document.querySelector("#activeAction");
  purpose.textContent = activeChangeContext?.purpose || "尚未选择 Purpose";
  action.textContent = activeChangeContext?.action || "编辑前请选择对应 Action";
}

function populateChangeContext() {
  const purposes = programChanges[currentEditorTable?.version] || programChanges.E0388;
  const purposeSelect = document.querySelector("#purposeSelect");
  purposeSelect.innerHTML = purposes.map((item) => `<option value="${item.purpose}">${item.purpose}</option>`).join("");
  purposeSelect.value = activeChangeContext?.purpose && purposes.some((item) => item.purpose === activeChangeContext.purpose) ? activeChangeContext.purpose : purposes[0].purpose;
  const selected = purposes.find((item) => item.purpose === purposeSelect.value);
  const actionSelect = document.querySelector("#actionSelect");
  actionSelect.innerHTML = selected.actions.map((action) => `<option value="${action}">${action}</option>`).join("");
  if (activeChangeContext?.action && selected.actions.includes(activeChangeContext.action)) actionSelect.value = activeChangeContext.action;
}

function openChangeContext() {
  populateChangeContext();
  document.querySelector("#changeContextModal").hidden = false;
  refreshIcons();
}

function handleRealtimeSave() {
  if (!activeChangeContext) { openChangeContext(); return; }
  const state = document.querySelector("#autosaveState");
  state.classList.add("saving");
  state.innerHTML = `<i data-lucide="cloud-upload"></i>正在自动保存…`;
  refreshIcons();
  window.clearTimeout(handleRealtimeSave.timer);
  handleRealtimeSave.timer = window.setTimeout(() => {
    state.classList.remove("saving");
    state.innerHTML = `<i data-lucide="cloud-check"></i>已自动保存到 ${activeChangeContext.action}`;
    refreshIcons();
  }, 700);
}

function renderDocuments() {
  const list = filteredDocuments();
  workGrid.innerHTML = list.map((doc) => `
    <article class="work-card" data-id="${doc.id}" tabindex="0">
      <div class="card-maintenance"><h3>${doc.product}</h3></div>
      <div class="card-version"><strong>${doc.version}</strong><span>${doc.program === "production" ? "量产程序" : "研发程序"}</span></div>
      <div class="card-change"><strong>${doc.purpose || "未关联 Purpose"}</strong><span>${doc.action || "尚无 Action"}</span></div>
      <div class="card-attributes"><span>Mask ${compactValues(doc.mask)}</span><span>${compactValues(doc.tester)}</span>${valuesOf(doc.ballType).length ? `<span>${compactValues(doc.ballType)}</span><span>${compactValues(doc.package)}</span>` : ""}</div>
      <div class="card-footer"><span>${doc.edited} · Checklist ${doc.checklist || "未生成"}</span>${statusMarkup(doc)}</div>
    </article>`).join("");
  workGrid.hidden = list.length === 0;
  emptyState.hidden = list.length !== 0;
  refreshIcons();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function resetImportConflict() {
  importOverwriteConfirmed = false;
  importConflict.hidden = true;
  confirmImport.disabled = !selectedImportFile;
  confirmImport.textContent = "导入";
}

function resetImport() {
  selectedImportFile = null;
  importFile.value = "";
  importDropZone.hidden = false;
  importFileSummary.hidden = true;
  importTarget.hidden = false;
  importPackageFields.hidden = true;
  importForm.reset();
  importProduct.value = products[0].id;
  document.querySelector("#importVersion").value = "E0388";
  document.querySelectorAll("[data-import-values] input").forEach((input) => { input.checked = input.defaultChecked; });
  updateProgramMatch();
  resetImportConflict();
}

function closeImportModal() { importModal.hidden = true; resetImport(); }

function setImportFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (!["xlsx", "xls", "asc"].includes(extension)) { showToast("请选择 Excel 或 ASC 文件"); return; }
  selectedImportFile = file;
  importDropZone.hidden = true;
  importFileSummary.hidden = false;
  document.querySelector("#importFileName").textContent = file.name;
  document.querySelector("#importFileMeta").textContent = `${extension.toUpperCase()} · ${Math.max(1, Math.round(file.size / 1024))} KB · 1 张阶段表格`;
  confirmImport.disabled = false;
  resetImportConflict();
  refreshIcons();
}

function updateImportStageFields() {
  importPackageFields.hidden = !["FT12", "FT34"].includes(importStage.value);
  updateProgramMatch();
  resetImportConflict();
}

function importValues(name) {
  return [...document.querySelectorAll(`[data-import-values="${name}"] input:checked`)].map((input) => input.value);
}

function updateProgramMatch() {
  const product = products.find((item) => item.id === importProduct.value) || products[0];
  const version = document.querySelector("#importVersion").value.toUpperCase() || "—";
  const stage = importStage.value;
  const count = stageTables.filter((table) => table.stage === stage).length;
  const match = document.querySelector("#programMatch");
  match.querySelector("strong").textContent = count ? `将加入已有测试程序 · ${count} 张表` : "将创建新的测试程序";
  match.querySelector("small").textContent = `${product.name} / ${stage} / ${version}`;
}

function openEditor(stage, productId = activeProduct, version = activeVersion, program = activeProgram, tableState = { status: "available", editor: "" }) {
  const product = products.find((item) => item.id === productId) || products[0];
  const programLabel = program === "production" ? "量产程序" : "研发程序";
  const readOnly = tableState.status !== "available";
  currentEditorTable = { ...tableState, stage, productId, version, program, product: product.name };
  activeChangeContext = tableState.purpose && tableState.action ? { purpose: tableState.purpose, action: tableState.action } : null;
  editorReturnView = navView;
  window.scrollTo(0, 0);
  homeView.hidden = true; productsView.hidden = true; productDetailView.hidden = true; adminView.hidden = true; editorView.hidden = false;
  document.querySelectorAll(".primary-nav .nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === "tables"));
  document.querySelector("#permissionButton").classList.remove("active");
  document.querySelector("#editorTitle").textContent = `${product.name} / ${programLabel} / ${version} / ${stage}`;
  document.querySelector("#attributeProduct").textContent = product.name;
  document.querySelector("#attributeStage").textContent = stage;
  document.querySelector("#attributeVersion").textContent = version;
  document.querySelector(".editor-attributes .editor-section-title > span").textContent = stage;
  document.querySelectorAll(".stage-only-attribute").forEach((item) => item.hidden = !["FT12", "FT34"].includes(stage));
  const status = document.querySelector("#editorStatus");
  status.className = `status ${tableState.status}`;
  status.innerHTML = tableState.status === "locked" ? `<i data-lucide="lock"></i>${tableState.editor} 编辑中` : tableState.status === "readonly" ? `<i data-lucide="eye"></i>仅可查看` : `<i data-lucide="circle-check"></i>可编辑`;
  ["undoEdit", "redoEdit", "chooseChangeContext"].forEach((id) => document.querySelector(`#${id}`).disabled = readOnly);
  document.querySelector("#attributeMask").innerHTML = valueTags(tableState.mask);
  document.querySelector("#attributeBallType").innerHTML = valueTags(tableState.ballType);
  document.querySelector("#attributePackage").innerHTML = valueTags(tableState.package);
  document.querySelector("#attributeDsa").innerHTML = valueTags(tableState.dsa);
  document.querySelector("#attributeTester").innerHTML = valueTags(tableState.tester);
  document.querySelector("#attributeFab").innerHTML = valueTags(tableState.fab);
  document.querySelector("#attributeDieType").innerHTML = valueTags(tableState.dieType);
  renderActiveChangeContext();
  document.querySelectorAll(".editable-values span").forEach((chip) => { chip.tabIndex = readOnly ? -1 : 0; chip.classList.toggle("disabled", readOnly); });
  const rowData = Array.from({ length: 18 }, (_, index) => ({ a: index < 6 ? `Item ${String(index + 1).padStart(2, "0")}` : "", b: "", c: "", d: "", e: "" }));
  editorOriginalRows = rowData.map((row) => ({ ...row }));
  if (editorGridApi) editorGridApi.destroy();
  document.querySelector("#stageGrid").innerHTML = "";
  editorGridApi = agGrid.createGrid(document.querySelector("#stageGrid"), {
    theme: agGrid.themeQuartz.withParams({ accentColor: "#0071e3", borderRadius: 0, fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif", fontSize: 12, headerBackgroundColor: "#f1f1f4", rowBorder: true, spacing: 6 }),
    columnDefs: [
      { headerName: "#", valueGetter: (params) => params.node.rowIndex + 1, width: 64, editable: false, pinned: "left" },
      { headerName: "Column A", field: "a", minWidth: 180 },
      { headerName: "Column B", field: "b" },
      { headerName: "Column C", field: "c" },
      { headerName: "Column D", field: "d" },
      { headerName: "Column E", field: "e", minWidth: 180 }
    ],
    defaultColDef: { flex: 1, minWidth: 120, editable: !readOnly, resizable: true },
    rowData,
    rowHeight: 34,
    headerHeight: 38,
    undoRedoCellEditing: true,
    undoRedoCellEditingLimit: 20,
    onCellValueChanged: () => handleRealtimeSave()
  });
  refreshIcons();
  if (!readOnly) window.setTimeout(openChangeContext, 120);
}

function renderAdminContent() {
  const query = document.querySelector("#adminSearch").value.trim().toLowerCase();
  const list = engineers.filter((person) => person.name.toLowerCase().includes(query));
  const summary = (person, mode) => { const selected = person[mode]; const families = [...new Set(products.filter((product) => selected.includes(product.id)).map((product) => product.family))]; return `${selected.length} 个产品 · ${families.join("、") || "未配置"}`; };
  adminContent.innerHTML = `<div class="admin-table people-table product-access-table"><div class="admin-row admin-header"><span>工程师</span><span>团队</span><span>子团队</span><span>我的产品</span><span>可见产品</span><span>可编辑产品</span></div>${list.map((person) => `<div class="admin-row" data-person="${person.id}"><span class="person-cell"><b>${person.name}</b><small>${person.email}</small></span><strong class="team-readonly">${person.team}</strong><span class="subteam-readonly">${person.subteam}</span><button class="access-trigger" data-access="mine"><span>${summary(person,"mine")}</span><i data-lucide="chevron-down"></i></button><button class="access-trigger" data-access="visible"><span>${summary(person,"visible")}</span><i data-lucide="chevron-down"></i></button><button class="access-trigger" data-access="editable"><span>${summary(person,"editable")}</span><i data-lucide="chevron-down"></i></button></div>`).join("")}</div><div class="table-foot">显示 ${list.length} / 126 名工程师 · 团队归属由组织架构同步</div>`;
  refreshIcons();
}

function eligibleAccessProducts(person, mode) {
  return products.filter((product) => product.team === person.team && (mode === "visible" || (mode === "editable" ? person.visible.includes(product.id) : person.editable.includes(product.id))));
}

function renderAccessPopover() {
  if (!accessContext) return;
  const person = engineers.find((item) => item.id === accessContext.personId);
  const selected = person[accessContext.mode];
  const available = eligibleAccessProducts(person, accessContext.mode);
  const families = [...new Set(available.map((product) => product.family))];
  accessTypes.innerHTML = families.map((family) => { const familyProducts = available.filter((product) => product.family === family); const checked = familyProducts.every((product) => selected.includes(product.id)); return `<label><input type="checkbox" data-access-family="${family}" ${checked ? "checked" : ""}><span>${family}</span><small>${familyProducts.length}</small></label>`; }).join("");
  accessProducts.innerHTML = available.map((product) => `<label><input type="checkbox" data-access-product="${product.id}" ${selected.includes(product.id) ? "checked" : ""}><span><b>${product.name}</b><small>${product.family} · ${product.code}</small></span></label>`).join("");
  document.querySelector("#accessCount").textContent = `已选择 ${selected.length} 个产品`;
}

function updateAccessSelection(id, checked) {
  const person = engineers.find((item) => item.id === accessContext.personId);
  const selected = person[accessContext.mode];
  if (checked && !selected.includes(id)) selected.push(id);
  if (!checked) person[accessContext.mode] = selected.filter((item) => item !== id);
  if (accessContext.mode === "visible" && !checked) { person.editable = person.editable.filter((item) => item !== id); person.mine = person.mine.filter((item) => item !== id); }
  if (accessContext.mode === "editable" && !checked) person.mine = person.mine.filter((item) => item !== id);
}

function renderVersions() {
  const query = document.querySelector("#versionSearch").value.trim().toLowerCase();
  const filter = document.querySelector("#versionFilter").value;
  const sortDirection = document.querySelector("#versionSort").dataset.direction;
  const list = versionSets.filter((item) => item.program === activeProgram && (filter === "all" || item.type === filter) && item.version.toLowerCase().includes(query)).sort((a, b) => sortDirection === "asc" ? b.rank - a.rank : a.rank - b.rank);
  document.querySelector("#versionResultCount").textContent = list.length;
  document.querySelector("#versionTabs").innerHTML = list.map((item) => { const purposes = programChanges[item.version] || []; const actions = purposes.reduce((total, purpose) => total + purpose.actions.length, 0); return `<button class="version-tab ${item.version === activeVersion ? "active" : ""}" data-version="${item.version}"><span><strong>${item.version}</strong><small>${item.updated} · ${purposes.length} Purpose · ${actions} Action</small></span><em class="version-state ${item.type}">${item.state}</em></button>`; }).join("") || `<p class="version-empty">没有匹配版本</p>`;
  refreshIcons();
}

function renderProductDetail(product, selectedVersion) {
  activeVersion = selectedVersion || versionSets.find((item) => item.program === activeProgram).version;
  document.querySelector("#pickerCurrentName").textContent = product.name;
  document.querySelector("#pickerCurrentFamily").textContent = `${product.family} · ${product.code}${product.maintained ? " · 我的产品" : ""}`;
  renderVersions();
  renderStageTables();
}

function renderStageTables() {
  const list = stageTables
    .filter((table) => stageStatusFilter === "all" || table.status === stageStatusFilter)
    .map((table, index) => ({ ...table, rank: stageTables.indexOf(table) }))
    .sort((a, b) => stageSortDirection === "asc" ? b.rank - a.rank : a.rank - b.rank);
  const grouped = ["CP", "RDBI", "FT12", "FT34"].map((stage) => ({ stage, tables: list.filter((table) => table.stage === stage) })).filter((group) => group.tables.length);
  document.querySelector("#stageRows").innerHTML = grouped.map((group) => { const purposes = programChanges[activeVersion] || []; const actions = purposes.reduce((total, purpose) => total + purpose.actions.length, 0); return `<section class="one-program-group"><div class="one-program-head"><span><b>Program</b><strong>${products.find((item) => item.id === activeProduct)?.name || products[0].name} / ${group.stage} / ${activeVersion}</strong></span><em>${purposes.length} Purpose · ${actions} Action · ${group.tables.length} 张表</em></div>${group.tables.map((table, index) => `<button class="stage-row" data-table-id="${table.id}"><span class="table-sequence"><strong>CT-${String(index + 1).padStart(2, "0")}</strong><small>${group.stage}</small></span><span class="stage-attribute">${compactValues(table.mask)}</span><span class="stage-attribute ${valuesOf(table.ballType).length ? "" : "muted"}">${valuesOf(table.ballType).length ? `${compactValues(table.ballType)} · ${compactValues(table.package)}` : "—"}</span><span class="stage-attribute">${compactValues(table.tester)} · ${compactValues(table.fab)}</span><span class="change-summary"><strong>${table.purpose || "未关联"}</strong><small>${table.action || "—"} · Checklist ${table.checklist || "未生成"}</small></span>${statusMarkup(table)}<span class="stage-updated">${table.updated}</span><i data-lucide="chevron-right"></i></button>`).join("")}</section>`; }).join("") || `<div class="stage-empty">没有符合条件的 Condition Table</div>`;
  refreshIcons();
}

function renderPickerProducts() {
  const query = productPickerInput.value.trim().toUpperCase();
  const list = products.filter((product) => (pickerFamily === "all" || product.family === pickerFamily) && product.name.includes(query));
  pickerProducts.innerHTML = list.map((product) => `<button data-picker-product="${product.id}"><span><strong>${product.name}</strong><small>${product.family} · ${product.code}</small></span>${product.maintained ? '<em class="maintained-label">我的产品</em>' : ''}<i data-lucide="chevron-right"></i></button>`).join("") || `<p class="picker-empty">没有找到匹配产品</p>`;
  refreshIcons();
}

function openProductDetail(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  activeProduct = productId;
  homeView.hidden = true; productsView.hidden = true; adminView.hidden = true; editorView.hidden = true; productDetailView.hidden = false;
  document.querySelector("#permissionButton").classList.remove("active");
  document.querySelectorAll(".primary-nav .nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === "tables"));
  renderProductDetail(product);
}

function setView(view) {
  navView = view;
  const showTables = view === "tables";
  const showAdmin = view === "admin";
  document.querySelector("#permissionButton").classList.toggle("active", showAdmin);
  productsView.hidden = true;
  homeView.hidden = showTables || showAdmin;
  productDetailView.hidden = !showTables;
  editorView.hidden = true;
  adminView.hidden = !showAdmin;
  if (showAdmin) { renderAdminContent(); return; }
  if (showTables) { renderProductDetail(products.find((item) => item.id === activeProduct) || products[0]); return; }
  const title = document.querySelector("#workSectionTitle");
  const copy = document.querySelector("#workSectionCopy");
  if (!showTables) {
    title.textContent = "继续工作";
    copy.textContent = "最近访问的 Condition Table";
    renderDocuments();
  }
}

productGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-product]");
  if (!card) return;
  openProductDetail(card.dataset.product);
});

recentProductGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-recent-product]");
  if (!card) return;
  openProductDetail(card.dataset.recentProduct);
});

document.querySelector("#productPickerButton").addEventListener("click", () => { productPickerMenu.hidden = !productPickerMenu.hidden; if (!productPickerMenu.hidden) { renderPickerProducts(); productPickerInput.focus(); } });
productPickerInput.addEventListener("input", () => { productPickerInput.value = productPickerInput.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 5); renderPickerProducts(); });
productPickerInput.addEventListener("keydown", (event) => { if (event.key !== "Enter") return; const exact = products.find((product) => product.name === productPickerInput.value); if (exact) { productPickerMenu.hidden = true; productPickerInput.value = ""; openProductDetail(exact.id); } });
document.querySelectorAll("[data-picker-family]").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll("[data-picker-family]").forEach((item) => item.classList.remove("active")); button.classList.add("active"); pickerFamily = button.dataset.pickerFamily; renderPickerProducts(); }));
pickerProducts.addEventListener("click", (event) => { const product = event.target.closest("[data-picker-product]"); if (!product) return; productPickerMenu.hidden = true; productPickerInput.value = ""; openProductDetail(product.dataset.pickerProduct); });
document.addEventListener("click", (event) => { if (!event.target.closest(".product-picker-wrap")) productPickerMenu.hidden = true; });
document.querySelector("#versionTabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-version]");
  if (!tab) return;
  activeVersion = tab.getAttribute("data-version");
  renderVersions();
  renderStageTables();
});
document.querySelectorAll("[data-program]").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll("[data-program]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  activeProgram = button.dataset.program;
  activeVersion = versionSets.find((item) => item.program === activeProgram).version;
  document.querySelector("#versionSearch").value = "";
  document.querySelector("#versionFilter").value = "all";
  const sortButton = document.querySelector("#versionSort");
  sortButton.dataset.direction = "desc";
  sortButton.setAttribute("aria-label", "按更新时间倒序，点击切换为正序");
  sortButton.innerHTML = `<span>时间</span><i data-lucide="arrow-down"></i>`;
  const product = products.find((item) => item.id === activeProduct) || products[0];
  renderProductDetail(product, activeVersion);
}));
document.querySelector("#versionSearch").addEventListener("input", renderVersions);
document.querySelector("#versionFilter").addEventListener("change", renderVersions);
document.querySelector("#versionSort").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const descending = button.dataset.direction === "desc";
  button.dataset.direction = descending ? "asc" : "desc";
  button.setAttribute("aria-label", descending ? "按更新时间正序，点击切换为倒序" : "按更新时间倒序，点击切换为正序");
  button.innerHTML = `<span>时间</span><i data-lucide="arrow-${descending ? "up" : "down"}"></i>`;
  refreshIcons();
  renderVersions();
});
document.querySelector("#stageStatusFilter").addEventListener("change", (event) => { stageStatusFilter = event.target.value; renderStageTables(); });
document.querySelector("#stageUpdatedSort").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const descending = stageSortDirection === "desc";
  stageSortDirection = descending ? "asc" : "desc";
  button.dataset.direction = stageSortDirection;
  button.setAttribute("aria-label", descending ? "按最后更新时间正序，点击切换为倒序" : "按最后更新时间倒序，点击切换为正序");
  button.innerHTML = `<span>最后更新</span><i data-lucide="arrow-${descending ? "up" : "down"}"></i>`;
  refreshIcons();
  renderStageTables();
});
document.querySelector("#stageRows").addEventListener("click", (event) => {
  const row = event.target.closest("[data-table-id]");
  if (!row) return;
  const table = stageTables.find((item) => item.id === Number(row.dataset.tableId));
  openEditor(table.stage, activeProduct, activeVersion, activeProgram, table);
});

productSearch.addEventListener("input", renderProducts);
document.querySelectorAll(".product-scope button").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll(".product-scope button").forEach((item) => item.classList.remove("active")); button.classList.add("active"); activeScope = button.dataset.scope; renderProducts(); }));
document.querySelector("#familySelect").addEventListener("change", (event) => { activeFamily = event.target.value; renderProducts(); });
document.querySelector("#productSort").addEventListener("change", (event) => { productSort = event.target.value; renderProducts(); });
document.querySelector("#goToProductIndex").addEventListener("click", () => {
  document.querySelectorAll(".primary-nav .nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === "tables"));
  setView("tables");
});
document.querySelector("#permissionButton").addEventListener("click", () => {
  document.querySelectorAll(".primary-nav .nav-item").forEach((item) => item.classList.remove("active"));
  setView("admin");
});
adminContent.addEventListener("change", (event) => {
  const row = event.target.closest("[data-person]");
  const field = event.target.dataset.field;
  if (!row || !field) return;
  const person = engineers.find((item) => item.id === Number(row.dataset.person));
  person[field] = event.target.value;
  showToast(`${person.name} 的配置已保存`);
});
adminContent.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-access]");
  if (!trigger) return;
  const row = trigger.closest("[data-person]");
  const rect = trigger.getBoundingClientRect();
  accessContext = { personId: Number(row.dataset.person), mode: trigger.dataset.access };
  const person = engineers.find((item) => item.id === accessContext.personId);
  document.querySelector("#accessTitle").textContent = accessContext.mode === "mine" ? "我的产品" : accessContext.mode === "visible" ? "可见产品" : "可编辑产品";
  document.querySelector("#accessPerson").textContent = `${person.name} · ${person.team} / ${person.subteam}`;
  accessPopover.style.left = `${Math.min(rect.left, window.innerWidth - 450)}px`;
  accessPopover.style.top = `${Math.min(rect.bottom + 6, window.innerHeight - 520)}px`;
  accessPopover.hidden = false;
  renderAccessPopover();
});
accessTypes.addEventListener("change", (event) => {
  const family = event.target.dataset.accessFamily;
  if (!family) return;
  const person = engineers.find((item) => item.id === accessContext.personId);
  eligibleAccessProducts(person, accessContext.mode).filter((product) => product.family === family).forEach((product) => updateAccessSelection(product.id, event.target.checked));
  renderAccessPopover();
});
accessProducts.addEventListener("change", (event) => {
  const productId = event.target.dataset.accessProduct;
  if (!productId) return;
  updateAccessSelection(productId, event.target.checked);
  renderAccessPopover();
});
document.querySelector("#closeAccessPopover").addEventListener("click", () => { accessPopover.hidden = true; });
document.querySelector("#finishAccess").addEventListener("click", () => { const person = engineers.find((item) => item.id === accessContext.personId); accessPopover.hidden = true; renderAdminContent(); showToast(`${person.name} 的产品权限已保存`); });
document.querySelector("#adminSearch").addEventListener("input", renderAdminContent);

importProduct.innerHTML = products.map((product) => `<option value="${product.id}">${product.name} · ${product.family}</option>`).join("");
document.querySelector("#importButton").addEventListener("click", () => { resetImport(); importModal.hidden = false; refreshIcons(); });
document.querySelector("#closeImport").addEventListener("click", closeImportModal);
document.querySelector("#cancelImport").addEventListener("click", closeImportModal);
document.querySelector("#removeImportFile").addEventListener("click", resetImport);
importModal.addEventListener("click", (event) => { if (event.target === importModal) closeImportModal(); });
importFile.addEventListener("change", () => { if (importFile.files[0]) setImportFile(importFile.files[0]); });
importDropZone.addEventListener("dragover", (event) => { event.preventDefault(); importDropZone.classList.add("dragging"); });
importDropZone.addEventListener("dragleave", () => importDropZone.classList.remove("dragging"));
importDropZone.addEventListener("drop", (event) => { event.preventDefault(); importDropZone.classList.remove("dragging"); if (event.dataTransfer.files[0]) setImportFile(event.dataTransfer.files[0]); });
importStage.addEventListener("change", updateImportStageFields);
document.querySelectorAll("#importTarget input, #importTarget select").forEach((field) => field.addEventListener("input", () => { if (field !== importStage) { updateProgramMatch(); resetImportConflict(); } }));
importForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedImportFile) return;
  const product = products.find((item) => item.id === importProduct.value);
  const program = document.querySelector("#importProgram").value;
  const version = document.querySelector("#importVersion").value.toUpperCase();
  const stage = importStage.value;
  const ftStage = ["FT12", "FT34"].includes(stage);
  if (!importValues("mask").length || (ftStage && (!importValues("ballType").length || !importValues("package").length))) {
    showToast("请完成必填属性");
    return;
  }
  const imported = { id: Math.max(...documents.map((doc) => doc.id)) + 1, title: stage, product: product.name, productId: product.id, program, version, mask: importValues("mask"), tester: importValues("tester"), fab: importValues("fab"), ballType: ftStage ? importValues("ballType") : [], package: ftStage ? importValues("package") : [], dsa: ftStage ? importValues("dsa") : [], dieType: ftStage ? importValues("dieType") : [], edited: "刚刚导入", color: { CP: "blue", RDBI: "violet", FT12: "green", FT34: "orange" }[stage], status: "available", editor: "" };
  documents.unshift(imported);
  if (product.id === activeProduct && version === activeVersion) stageTables.unshift({ ...imported, id: Math.max(...stageTables.map((table) => table.id)) + 1, stage, updated: "刚刚" });
  closeImportModal();
  activeFilter = "all";
  document.querySelectorAll(".segmented button").forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  renderDocuments();
  showToast(`已加入测试程序 · ${product.name} / ${stage} / ${version}`);
});

document.querySelectorAll(".segmented button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active"); activeFilter = button.dataset.filter; renderDocuments();
}));

document.querySelectorAll(".primary-nav .nav-item").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".primary-nav .nav-item").forEach((item) => item.classList.remove("active"));
  button.classList.add("active"); setView(button.dataset.view);
}));

workGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".work-card");
  if (!card) return;
  const doc = documents.find((item) => item.id === Number(card.dataset.id));
  openEditor(doc.title, doc.productId, doc.version, doc.program || "development", doc);
});

document.querySelector("#closeEditor").addEventListener("click", () => setView(editorReturnView));
document.querySelector("#undoEdit").addEventListener("click", () => editorGridApi?.undoCellEditing());
document.querySelector("#redoEdit").addEventListener("click", () => editorGridApi?.redoCellEditing());
document.querySelector("#chooseChangeContext").addEventListener("click", openChangeContext);
document.querySelector("#purposeSelect").addEventListener("change", (event) => {
  const purposes = programChanges[currentEditorTable?.version] || programChanges.E0388;
  const selected = purposes.find((item) => item.purpose === event.target.value);
  document.querySelector("#actionSelect").innerHTML = selected.actions.map((action) => `<option value="${action}">${action}</option>`).join("");
});
document.querySelector("#closeChangeContext").addEventListener("click", () => { document.querySelector("#changeContextModal").hidden = true; });
document.querySelector("#cancelChangeContext").addEventListener("click", () => { document.querySelector("#changeContextModal").hidden = true; });
document.querySelector("#confirmChangeContext").addEventListener("click", () => {
  activeChangeContext = { purpose: document.querySelector("#purposeSelect").value, action: document.querySelector("#actionSelect").value };
  document.querySelector("#changeContextModal").hidden = true;
  renderActiveChangeContext();
  handleRealtimeSave();
  showToast("修改目的已关联，后续变更将自动保存");
});

const checklistLabels = ["属性与目标测试程序一致", "多选条件组合已确认", "关键参数修改符合 Action", "与上一版本 Diff 已检查", "同事复核完成"];
function updateChecklistProgress() {
  const checked = document.querySelectorAll("#checklistItems input:checked").length;
  document.querySelector("#checklistProgress").textContent = `${checked} / ${checklistLabels.length}`;
}
document.querySelector("#generateChecklist").addEventListener("click", () => {
  document.querySelector("#checklistContext").textContent = `${currentEditorTable.product} / ${currentEditorTable.stage} / ${currentEditorTable.version} · ${activeChangeContext?.purpose || "未关联 Purpose"}`;
  document.querySelector("#checklistItems").innerHTML = checklistLabels.map((label, index) => `<label><input type="checkbox" ${index < 2 ? "checked" : ""}><span><i data-lucide="check"></i></span><strong>${label}</strong></label>`).join("");
  document.querySelector("#checklistModal").hidden = false;
  updateChecklistProgress();
  refreshIcons();
});
document.querySelector("#checklistItems").addEventListener("change", updateChecklistProgress);
document.querySelector("#closeChecklist").addEventListener("click", () => { document.querySelector("#checklistModal").hidden = true; });
document.querySelector("#finishChecklist").addEventListener("click", () => { document.querySelector("#checklistModal").hidden = true; showToast("Checklist 已保存，可供同事继续检查"); });
document.querySelector("#copyChecklist").addEventListener("click", () => showToast("Checklist 已复制"));

document.querySelector("#compareVersions").addEventListener("click", () => {
  document.querySelector("#diffContext").textContent = `${currentEditorTable.product} / ${currentEditorTable.stage}`;
  document.querySelector("#diffTarget").innerHTML = `<option>${currentEditorTable.version}</option><option>E0387</option>`;
  document.querySelector("#diffModal").hidden = false;
  refreshIcons();
});
document.querySelector("#closeDiff").addEventListener("click", () => { document.querySelector("#diffModal").hidden = true; });

document.addEventListener("keydown", (event) => { if (event.key === "Escape") { productPickerMenu.hidden = true; if (!importModal.hidden) closeImportModal(); ["changeContextModal", "checklistModal", "diffModal"].forEach((id) => { document.querySelector(`#${id}`).hidden = true; }); } });

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("condition-table-theme", isDark ? "dark" : "light");
  const toggle = document.querySelector("#themeToggle"); const label = isDark ? "浅色模式" : "深色模式";
  toggle.title = label; toggle.setAttribute("aria-label", label); toggle.querySelector("[data-lucide]").setAttribute("data-lucide", isDark ? "sun" : "moon"); refreshIcons();
});

if (localStorage.getItem("condition-table-theme") === "dark") {
  document.documentElement.classList.add("dark"); const toggle = document.querySelector("#themeToggle"); toggle.title = "浅色模式"; toggle.setAttribute("aria-label", "浅色模式"); toggle.querySelector("[data-lucide]").setAttribute("data-lucide", "sun");
}

window.addEventListener("DOMContentLoaded", () => { renderProducts(); renderRecentProducts(); renderDocuments(); refreshIcons(); });
