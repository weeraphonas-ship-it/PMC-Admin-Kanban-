
        // GLOBAL DATABASES & CONFIG
        const solverDatabase = {
            'DFOuter': [
                { id: 'S-101', name: 'ชัชชัย พึ่งตน (SL)' },
                { id: 'S-102', name: 'สุรพงษ์ ยอดขยัน (SL)' }
            ],
            'FTest': [
                { id: 'S-201', name: 'อนันต์ แก้วดี (SL)' },
                { id: 'S-202', name: 'วิชาญ เรืองรอง (SL)' }
            ],
            'INNERG': [
                { id: 'S-301', name: 'กิตติกร มั่นคง (SL)' },
                { id: 'S-302', name: 'ธีระชาติ ชูชื่น (SL)' }
            ]
        };

        const sectionOptionMapping = {
            'DFOuter': 'DF-OUTTER',
            'FTest': 'F-Test',
            'INNERG': 'INNER-G'
        };

        const rootCausesLookup = {
            'RC-01': 'ลูกปืนเสื่อมสภาพ',
            'RC-02': 'สายไฟหลวม/ขาด',
            'RC-03': 'แรงดันลมตก',
            'RC-04': 'คราบสกปรกอุดตันเซนเซอร์',
            'RC-05': 'กระแสกระชากตัดวงจร'
        };

        const solutionsLookup = {
            'SOL-01': 'เปลี่ยนอะไหล่ใหม่',
            'SOL-02': 'ปรับตั้งค่าแรงดันใหม่',
            'SOL-03': 'ทำความสะอาดอุปกรณ์ชิ้นส่วน',
            'SOL-04': 'ขันแน่นขั้วต่อกระแสไฟ',
            'SOL-05': 'โปรเซสและรีเซ็ตการทำงานกล่องควบคุม'
        };

        // Active State of Shared Database
        let activeTickets = [
            {
                id: 'PMC-2026-104',
                reporter: {
                    name: 'วีระพล สุภาโชค',
                    section: 'DFOuter',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'เครื่อง Alarm',
                    detail: 'สายพานลำเลียงส่งเสียงดังกุกกักยาวนานและมีสัญญาณความขัดข้องสีแดงขึ้นสถานะล็อกหน้าจอ',
                    image: 'https://placehold.co/400x300/1e293b/a855f7?text=Machine+Error+Alarm'
                },
                admin: {
                    section: 'DFOuter',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'เครื่อง Alarm',
                    detail: 'สายพานลำเลียงส่งเสียงดังกุกกักยาวนานและมีสัญญาณความขัดข้องสีแดงขึ้นสถานะล็อกหน้าจอ',
                    assigneeId: '',
                    severity: '0',
                    assignTime: '',
                    auditor: 'อมรเทพ รักษ์ความปลอดภัย',
                    auditTime: ''
                },
                solver: null,
                solverDraft: null, // Temporary storage for SL draft saving
                status: 'Pending' // รอส่วนกลางรับเรื่อง
            },
            {
                id: 'PMC-2026-056',
                reporter: {
                    name: 'สมชาย รักดี',
                    section: 'FTest',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'ลูกกลิ้งไม่หมุน',
                    detail: 'ลูกกลิ้งลำเลียงวัสดุด้านหลังเครื่องจักรติดขัดอย่างหนัก ไม่ขยับตั้งแต่เวลาสิบโมงเช้า',
                    image: 'https://placehold.co/400x300/1e293b/10b981?text=Roller+Stuck'
                },
                admin: {
                    section: 'FTest',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'ลูกกลิ้งไม่หมุน',
                    detail: 'ลูกกลิ้งลำเลียงวัสดุด้านหลังเครื่องจักรติดขัดอย่างหนัก ไม่ขยับตั้งแต่เวลาสิบโมงเช้า',
                    assigneeId: 'S-201',
                    severity: '3',
                    assignTime: '24 มิ.ย. 2026, 11:15 น.',
                    auditor: 'อมรเทพ รักษ์ความปลอดภัย',
                    auditTime: ''
                },
                solver: null,
                solverDraft: null,
                status: 'Processing' // กำลังดำเนินการ
            },
            {
                id: 'PMC-2026-057',
                reporter: {
                    name: 'เกียรติศักดิ์ อุ่นใจ',
                    section: 'DFOuter',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'ขัดข้องเครื่องกลหลัก',
                    detail: 'ตัวสายสัญญาณขัดข้องทางไฟฟ้ากระแสตรง มอเตอร์สายพานหยุดหมุนชั่วขณะ',
                    image: 'https://placehold.co/400x300/1e293b/a855f7?text=Main+Motor+Stalled'
                },
                admin: {
                    section: 'DFOuter',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'ขัดข้องเครื่องกลหลัก',
                    detail: 'ตัวสายสัญญาณขัดข้องทางไฟฟ้ากระแสตรง มอเตอร์สายพานหยุดหมุนชั่วขณะ',
                    assigneeId: 'S-101',
                    severity: '4',
                    assignTime: '25 มิ.ย. 2026, 09:00 น.',
                    auditor: 'อมรเทพ รักษ์ความปลอดภัย',
                    auditTime: ''
                },
                solver: null,
                solverDraft: null,
                status: 'Processing' // กำลังดำเนินการ
            },
            {
                id: 'PMC-2026-092',
                reporter: {
                    name: 'ประเสริฐ สัจจะ',
                    section: 'INNERG',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'layer shift หลังบอนดิ้ง',
                    detail: 'เกิดการขยับเลื่อนของแผ่นชิ้นงานหลังเข้าขั้นตอนบอนดิ้งความร้อน พังเสียหายไปสามชิ้นงาน',
                    image: 'https://placehold.co/400x300/1e293b/ef4444?text=Layer+Shift+Error'
                },
                admin: {
                    section: 'INNERG',
                    groupName: 'ปัญหาด้านเครื่องจักร (Machine)',
                    problemName: 'layer shift หลังบอนดิ้ง',
                    detail: 'เกิดการขยับเลื่อนของแผ่นชิ้นงานหลังเข้าขั้นตอนบอนดิ้งความร้อน พังเสียหายไปสามชิ้นงาน',
                    assigneeId: 'S-301',
                    severity: '4',
                    assignTime: '24 มิ.ย. 2026, 10:00 น.',
                    auditor: 'อมรเทพ รักษ์ความปลอดภัย',
                    auditTime: ''
                },
                solver: {
                    type: 'Solved',
                    causes: ['RC-01', 'RC-03'],
                    causesDetail: 'พบลมจ่ายไม่คงที่ทำให้จิกชิ้นงานไม่อยู่และแบริ่งตลับลูกกลิ้งรับแรงเฉือนขัดเงื่อน',
                    solutions: ['SOL-01', 'SOL-02'],
                    solutionsDetail: 'เปลี่ยนหัวแบริ่งลูกปืนชุดใหม่และปรับเกจแรนดันกระแสลมป้อนกลับให้อยู่ที่ 6 Bar',
                    proofImage: 'https://placehold.co/400x300/1e293b/34d399?text=Solved+And+Maintained',
                    rejectReason: ''
                },
                solverDraft: null,
                status: 'Pending_Accept' // รอตรวจรับ
            },
            {
                id: 'PMC-2026-021',
                reporter: {
                    name: 'นพดล เก่งวิเคราะห์',
                    section: 'DFOuter',
                    groupName: 'ปัญหาด้านความปลอดภัย (Safety)',
                    problemName: 'Oil Leak on Floor (คราบน้ำมันรั่วบนพื้น)',
                    detail: 'พบคราบน้ำมันหล่อลื่นกองใหญ่อยู่ที่ทางเดินหลังแผนกผลิตห้ากระบวนการ',
                    image: 'https://placehold.co/400x300/1e293b/f59e0b?text=Oil+Leaking'
                },
                admin: {
                    section: 'DFOuter',
                    groupName: 'ปัญหาด้านความปลอดภัย (Safety)',
                    problemName: 'Oil Leak on Floor (คราบน้ำมันรั่วบนพื้น)',
                    detail: 'พบคราบน้ำมันหล่อลื่นกองใหญ่อยู่ที่ทางเดินหลังแผนกผลิตห้ากระบวนการ',
                    assigneeId: 'S-102',
                    severity: '5',
                    assignTime: '23 มิ.ย. 2026, 08:30 น.',
                    auditor: 'อมรเทพ รักษ์ความปลอดภัย',
                    auditTime: ''
                },
                solver: {
                    type: 'Reject',
                    causes: [],
                    causesDetail: '',
                    solutions: [],
                    solutionsDetail: '',
                    proofImage: '',
                    rejectReason: 'จากการส่งทีมเข้าตรวจสอบ คราบน้ำมันเกิดจากถังระบายน้ำแผนกอื่นซึม ไม่ใช่เครื่องจักรส่วนผลิตของ DFOuter รับผิดชอบครับ'
                },
                solverDraft: null,
                status: 'Pending_Accept' // รอตรวจรับ
            }
        ];

        let selectedTicketId = null; // Admin Workspace Tracker
        let currentSolverProfile = 'S-101'; // Simulated Section Leader Profile S-101 (ชัชชัย พึ่งตน - DFOuter)
        let activeMobileTicket = null; // Section Leader Selected Ticket Detail Tracker
        let tempMobileProofImage = ""; // Upload Proof Simulation Holder

        window.addEventListener('load', () => {
            renderKanbanBoard();
            renderSectionLeaderWorkspace();
        });

        // Tab Workspace Switching Engine
        function switchPortal(portalId) {
            const pAdmin = document.getElementById('portal-admin');
            const pSolver = document.getElementById('portal-solver');
            const btnAdmin = document.getElementById('nav-btn-admin');
            const btnSolver = document.getElementById('nav-btn-solver');

            if (portalId === 'admin') {
                pAdmin.classList.remove('hidden');
                pSolver.classList.add('hidden');
                
                btnAdmin.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all bg-indigo-600 text-slate-950 shadow-lg shadow-indigo-600/10";
                btnSolver.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-slate-100";
                
                // Redraw Admin Desk state
                renderKanbanBoard();
                if (selectedTicketId) selectTicket(selectedTicketId);
            } else {
                pAdmin.classList.add('hidden');
                pSolver.classList.remove('hidden');
                
                btnAdmin.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-slate-100";
                btnSolver.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all bg-indigo-600 text-slate-950 shadow-lg shadow-indigo-600/10";
                
                // Redraw Solver Desk state
                renderSectionLeaderWorkspace();
            }
        }

        // --- 1. CENTRAL ADMIN DESK CORE LOGIC ---
        function renderKanbanBoard() {
            const colPending = document.getElementById('col-pending');
            const colProcessing = document.getElementById('col-processing');
            const colPendingAccept = document.getElementById('col-pending-accept');
            const colResolved = document.getElementById('col-resolved');

            colPending.innerHTML = '';
            colProcessing.innerHTML = '';
            colPendingAccept.innerHTML = '';
            colResolved.innerHTML = '';

            let counts = { Pending: 0, Processing: 0, Pending_Accept: 0, Resolved: 0 };

            activeTickets.forEach(ticket => {
                counts[ticket.status]++;

                // Create Ticket Card Element
                const card = document.createElement('div');
                card.className = `bg-slate-900 hover:bg-slate-800 border p-3 rounded-2xl cursor-pointer transition-all ${
                    selectedTicketId === ticket.id ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' : 'border-slate-800/80 hover:border-slate-700/80'
                }`;
                card.onclick = () => selectTicket(ticket.id);

                // Set Badge colors based on status or type
                let typeIndicator = "";
                if (ticket.status === 'Pending_Accept' && ticket.solver) {
                    if (ticket.solver.type === 'Reject') {
                        typeIndicator = `<span class="bg-rose-500/15 text-rose-400 border border-rose-500/20 text-[8.5px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider block mt-2 flex items-center justify-center gap-1"><i class="fa-solid fa-ban"></i> Solver ปฏิเสธงาน</span>`;
                    } else {
                        typeIndicator = `<span class="bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 text-[8.5px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider block mt-2 flex items-center justify-center gap-1"><i class="fa-solid fa-circle-check"></i> แก้ไขเสร็จแล้ว</span>`;
                    }
                } else if (ticket.status === 'Resolved' && ticket.admin.resolvedType === 'SectionReject') {
                    typeIndicator = `<span class="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[8.5px] px-2 py-0.5 rounded-md font-bold block mt-2 text-center">Section Reject (ยืนยัน)</span>`;
                }

                card.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[9.5px] font-bold font-numeric tracking-wide text-slate-500">${ticket.id}</span>
                        <span class="text-[8px] bg-slate-950 text-slate-400 border border-slate-800/60 py-0.5 px-1.5 rounded-md">${sectionOptionMapping[ticket.reporter.section]}</span>
                    </div>
                    <h4 class="text-xs font-bold text-slate-200 line-clamp-1">${ticket.reporter.problemName}</h4>
                    <p class="text-[10px] text-slate-400 mt-1 line-clamp-2">${ticket.reporter.detail}</p>
                    ${typeIndicator}
                `;

                // Append card to corresponding container
                if (ticket.status === 'Pending') colPending.appendChild(card);
                else if (ticket.status === 'Processing') colProcessing.appendChild(card);
                else if (ticket.status === 'Pending_Accept') colPendingAccept.appendChild(card);
                else if (ticket.status === 'Resolved') colResolved.appendChild(card);
            });

            // Update Counter Badges
            document.getElementById('count-pending').innerText = counts.Pending;
            document.getElementById('count-processing').innerText = counts.Processing;
            document.getElementById('count-pending-accept').innerText = counts.Pending_Accept;
            document.getElementById('count-resolved').innerText = counts.Resolved;

            document.getElementById('board-total-count').innerText = `ตั๋วทั้งหมด: ${activeTickets.length} รายการ`;
        }

        function selectTicket(ticketId) {
            selectedTicketId = ticketId;
            renderKanbanBoard(); // Redraw selections highlight on cards

            const ticket = activeTickets.find(t => t.id === ticketId);
            if (!ticket) return;

            // Load Detail Elements
            document.getElementById('detail-placeholder').classList.add('hidden');
            document.getElementById('detail-card-data').classList.remove('hidden');
            document.getElementById('detail-ticket-id').innerText = ticket.id;

            // Load SECTION A (Reporter Info)
            document.getElementById('reporter-name').innerText = ticket.reporter.name;
            document.getElementById('reporter-section').innerText = sectionOptionMapping[ticket.reporter.section];
            document.getElementById('reporter-group').innerText = ticket.reporter.groupName;
            document.getElementById('reporter-problem').innerText = ticket.reporter.problemName;
            document.getElementById('reporter-detail').innerText = ticket.reporter.detail;

            const mediaBlock = document.getElementById('reporter-media-block');
            if (ticket.reporter.image) {
                mediaBlock.classList.remove('hidden');
                document.getElementById('reporter-image').src = ticket.reporter.image;
            } else {
                mediaBlock.classList.add('hidden');
            }

            // Load Dynamic Section B & Actions based on Status
            renderDynamicAdminSection(ticket);
            renderDynamicActionsPanel(ticket);
        }

        function renderDynamicAdminSection(ticket) {
            const container = document.getElementById('admin-editable-fields');
            const sectionHeader = document.getElementById('admin-header-title');
            const solverSection = document.getElementById('solver-response-section');

            // Hide solver block initially, reveal if solver data present
            solverSection.classList.add('hidden');
            document.getElementById('solver-reject-alert').classList.add('hidden');

            if (ticket.status === 'Pending') {
                sectionHeader.innerText = "การดำเนินการของส่วนกลาง (คัดกรองและส่งมอบ)";
                
                // Construct Options list for Section dropdown dynamically
                let sectionOpts = '';
                for (const key in sectionOptionMapping) {
                    sectionOpts += `<option value="${key}" ${ticket.admin.section === key ? 'selected' : ''}>${sectionOptionMapping[key]}</option>`;
                }

                // Inject editable fields for Pending
                container.innerHTML = `
                    <div class="space-y-3.5 text-xs">
                        <div class="space-y-1">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">1. แผนกที่เกิดปัญหา</label>
                            <select id="adm-select-section" onchange="onAdminSectionChange('${ticket.id}')" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-100 focus:outline-none focus:border-indigo-500">
                                ${sectionOpts}
                            </select>
                        </div>

                        <div class="space-y-1">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">2. กลุ่มปัญหา</label>
                            <input type="text" id="adm-input-group" value="${ticket.admin.groupName}" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-100 focus:outline-none focus:border-indigo-500">
                        </div>

                        <div class="space-y-1">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">3. ปัญหาที่พบ</label>
                            <input type="text" id="adm-input-problem" value="${ticket.admin.problemName}" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-100 focus:outline-none focus:border-indigo-500">
                        </div>

                        <div class="space-y-1">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">4. รายละเอียดเพิ่มเติม</label>
                            <textarea id="adm-input-detail" rows="3" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-100 focus:outline-none focus:border-indigo-500 resize-none">${ticket.admin.detail}</textarea>
                        </div>

                        <div class="space-y-1">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">5. ผู้รับผิดชอบ (Section Leader)</label>
                            <select id="adm-select-assignee" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-100 focus:outline-none focus:border-indigo-500">
                                <option value="">-- เลือกผู้รับผิดชอบจาก Dropdown --</option>
                                ${getAssigneeOptions(ticket.admin.section, ticket.admin.assigneeId)}
                            </select>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">6. ระดับความรุนแรงของปัญหา (1-5)</label>
                            <div class="flex items-center gap-2.5">
                                <input type="range" id="adm-range-severity" min="1" max="5" value="${ticket.admin.severity !== '0' ? ticket.admin.severity : '3'}" class="flex-1 accent-indigo-500 bg-slate-800 h-1 rounded-lg appearance-none cursor-pointer">
                                <span class="bg-indigo-500/10 text-indigo-400 font-bold border border-indigo-500/20 px-2.5 py-0.5 rounded-lg text-xs" id="lbl-severity-val">${ticket.admin.severity !== '0' ? ticket.admin.severity : '3'}</span>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">7. เจ้าหน้าที่ส่วนกลางที่รับเรื่อง</span>
                            <div class="bg-slate-900/60 border border-slate-800/40 py-2.5 px-3 rounded-xl text-slate-400 italic">
                                ${ticket.admin.auditor}
                            </div>
                        </div>
                    </div>
                `;

                // Add real-time event listener to range input to update score badge UI
                const rInput = document.getElementById('adm-range-severity');
                const lbl = document.getElementById('lbl-severity-val');
                rInput.addEventListener('input', () => {
                    lbl.innerText = rInput.value;
                });

            } else if (ticket.status === 'Processing') {
                sectionHeader.innerText = "การดำเนินงานของส่วนกลาง (มอบหมายเรียบร้อย)";
                
                const assigneeName = getAssigneeName(ticket.admin.section, ticket.admin.assigneeId);

                // Inject Read-Only detail view for Processing status
                container.innerHTML = `
                    <div class="grid grid-cols-2 gap-3.5 text-xs">
                        <div>
                            <span class="text-slate-500 text-[10px] block">แผนกที่เกิดปัญหา</span>
                            <strong class="text-slate-300">${sectionOptionMapping[ticket.admin.section]}</strong>
                        </div>
                        <div>
                            <span class="text-slate-500 text-[10px] block">ระดับความรุนแรง</span>
                            <span class="bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-md font-bold text-[10.5px]">ระดับ ${ticket.admin.severity} / 5</span>
                        </div>
                        <div class="col-span-2">
                            <span class="text-slate-500 text-[10px] block">กลุ่มปัญหา</span>
                            <strong class="text-slate-300">${ticket.admin.groupName}</strong>
                        </div>
                        <div class="col-span-2">
                            <span class="text-slate-500 text-[10px] block">ปัญหาที่มอบหมาย</span>
                            <strong class="text-slate-300">${ticket.admin.problemName}</strong>
                        </div>
                        <div class="col-span-2">
                            <span class="text-slate-500 text-[10px] block">รายละเอียดบันทึก</span>
                            <p class="text-slate-300 mt-1 leading-relaxed bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/40 text-[11px] whitespace-pre-line">${ticket.admin.detail}</p>
                        </div>
                        <div>
                            <span class="text-slate-500 text-[10px] block">ผู้รับผิดชอบ (Section Leader)</span>
                            <strong class="text-slate-300"><i class="fa-solid fa-user-gear text-slate-500 mr-1"></i>${assigneeName}</strong>
                        </div>
                        <div>
                            <span class="text-slate-500 text-[10px] block">เจ้าหน้าที่ส่วนกลางที่ดำเนินการ</span>
                            <strong class="text-slate-300">${ticket.admin.auditor}</strong>
                        </div>
                        <div class="col-span-2">
                            <span class="text-slate-500 text-[10px] block">เวลาที่มอบหมาย (Assign Time)</span>
                            <strong class="text-slate-300"><i class="fa-regular fa-clock text-slate-500 mr-1"></i>${ticket.admin.assignTime}</strong>
                        </div>
                    </div>
                `;

            } else if (ticket.status === 'Pending_Accept' || ticket.status === 'Resolved') {
                sectionHeader.innerText = "การดำเนินการของส่วนกลาง (ข้อมูลยืนยันหลัก)";
                const assigneeName = getAssigneeName(ticket.admin.section, ticket.admin.assigneeId);

                // Inject Admin details Read Only
                container.innerHTML = `
                    <div class="grid grid-cols-2 gap-3.5 text-xs">
                        <div>
                            <span class="text-slate-500 text-[10px] block">แผนกที่เกิดปัญหา</span>
                            <strong class="text-slate-300">${sectionOptionMapping[ticket.admin.section]}</strong>
                        </div>
                        <div>
                            <span class="text-slate-500 text-[10px] block">ระดับความรุนแรง</span>
                            <span class="bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-md font-bold text-[10.5px]">ระดับ ${ticket.admin.severity} / 5</span>
                        </div>
                        <div class="col-span-2">
                            <span class="text-slate-500 text-[10px] block">กลุ่มปัญหา</span>
                            <strong class="text-slate-300">${ticket.admin.groupName}</strong>
                        </div>
                        <div class="col-span-2">
                            <span class="text-slate-500 text-[10px] block">ปัญหาที่มอบหมาย</span>
                            <strong class="text-slate-300">${ticket.admin.problemName}</strong>
                        </div>
                        <div class="col-span-2">
                            <span class="text-slate-500 text-[10px] block">รายละเอียดบันทึก</span>
                            <p class="text-slate-300 mt-1 leading-relaxed bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/40 text-[11px] whitespace-pre-line">${ticket.admin.detail}</p>
                        </div>
                        <div>
                            <span class="text-slate-500 text-[10px] block">ผู้รับผิดชอบ</span>
                            <strong class="text-slate-300"><i class="fa-solid fa-user-gear text-slate-500 mr-1"></i>${assigneeName}</strong>
                        </div>
                        <div>
                            <span class="text-slate-500 text-[10px] block">เวลาที่มอบหมาย (Assign Time)</span>
                            <strong class="text-indigo-400 font-bold">${ticket.admin.assignTime}</strong>
                        </div>
                        ${ticket.status === 'Resolved' ? `
                        <div>
                            <span class="text-slate-500 text-[10px] block">ผู้ตรวจรับ</span>
                            <strong class="text-emerald-400"><i class="fa-solid fa-circle-check text-xs mr-1"></i>${ticket.admin.auditor}</strong>
                        </div>
                        <div>
                            <span class="text-slate-500 text-[10px] block">เวลาที่ตรวจรับ</span>
                            <strong class="text-slate-300 font-numeric">${ticket.admin.auditTime}</strong>
                        </div>
                        ` : ''}
                    </div>
                `;

                // Load Solver responses block (Section C)
                if (ticket.solver) {
                    solverSection.classList.remove('hidden');

                    if (ticket.solver.type === 'Reject') {
                        document.getElementById('solver-reject-alert').classList.remove('hidden');
                        document.getElementById('solver-reject-reason').innerText = `"${ticket.solver.rejectReason}"`;
                        document.getElementById('solver-proof-block').classList.add('hidden');
                    } else {
                        document.getElementById('solver-proof-block').classList.remove('hidden');
                        document.getElementById('solver-proof-image').src = ticket.solver.proofImage;
                    }

                    // Render causes chips
                    const causesContainer = document.getElementById('solver-causes-chips');
                    causesContainer.innerHTML = '';
                    if (ticket.solver.causes.length > 0) {
                        ticket.solver.causes.forEach(rcId => {
                            causesContainer.innerHTML += `<span class="bg-slate-800 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md text-[10px] font-bold"><i class="fa-solid fa-circle-nodes mr-1 text-[8px] text-slate-500"></i>${rootCausesLookup[rcId] || rcId}</span>`;
                        });
                    } else {
                        causesContainer.innerHTML = '<span class="text-slate-500 text-[10px] italic">ไม่มีข้อมูล</span>';
                    }
                    document.getElementById('solver-causes-detail').innerText = ticket.solver.causesDetail || '-';

                    // Render solutions chips
                    const solutionsContainer = document.getElementById('solver-solutions-chips');
                    solutionsContainer.innerHTML = '';
                    if (ticket.solver.solutions.length > 0) {
                        ticket.solver.solutions.forEach(solId => {
                            solutionsContainer.innerHTML += `<span class="bg-slate-800 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md text-[10px] font-bold"><i class="fa-solid fa-check mr-1 text-[8px] text-slate-500"></i>${solutionsLookup[solId] || solId}</span>`;
                        });
                    } else {
                        solutionsContainer.innerHTML = '<span class="text-slate-500 text-[10px] italic">ไม่มีข้อมูล</span>';
                    }
                    document.getElementById('solver-solutions-detail').innerText = ticket.solver.solutionsDetail || '-';
                }
            }
        }

        function onAdminSectionChange(ticketId) {
            const selectSec = document.getElementById('adm-select-section').value;
            const selectAssignee = document.getElementById('adm-select-assignee');

            // Find ticket and update database record immediately
            const ticket = activeTickets.find(t => t.id === ticketId);
            if (ticket) {
                ticket.admin.section = selectSec;
            }

            // Reload Assignee Options
            selectAssignee.innerHTML = '<option value="">-- เลือกผู้รับผิดชอบจาก Dropdown --</option>' + getAssigneeOptions(selectSec, '');
        }

        function renderDynamicActionsPanel(ticket) {
            const panel = document.getElementById('detail-actions-panel');
            panel.classList.remove('hidden');

            if (ticket.status === 'Pending') {
                panel.innerHTML = `
                    <div class="space-y-3">
                        <div class="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 space-y-2">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">กรอกเหตุผลกรณีต้องการปฏิเสธคำแจ้ง (Reject)</label>
                            <input type="text" id="adm-reject-input-reason" placeholder="เช่น รายละเอียดสับสน หรือไม่ใช่ปัญหาทางเทคนิค..." class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-100 placeholder-slate-700 focus:outline-none focus:border-rose-500">
                        </div>

                        <div class="grid grid-cols-2 gap-3.5">
                            <button onclick="triggerReject('${ticket.id}')" class="bg-slate-950 hover:bg-rose-950/20 text-rose-500 border border-rose-500/20 py-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95">
                                <i class="fa-solid fa-circle-xmark"></i> ปฏิเสธ (Reject)
                            </button>
                            <button onclick="triggerAssign('${ticket.id}')" class="bg-indigo-600 hover:bg-indigo-500 text-slate-950 font-bold text-xs py-3 rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-95">
                                <i class="fa-solid fa-paper-plane text-slate-950"></i> ส่งตั๋ว (Assign)
                            </button>
                        </div>
                    </div>
                `;

            } else if (ticket.status === 'Processing') {
                panel.innerHTML = `
                    <div class="bg-slate-950/40 p-4 border border-slate-800 rounded-2xl text-center text-xs text-slate-500">
                        <i class="fa-solid fa-clock-rotate-left text-lg block mb-2 text-amber-500"></i>
                        <span>อยู่ระหว่างการดำเนินการของ Section Leader ไม่สามารถดำเนินการแก้ไขผลลัพธ์ผ่านทางแผงแอดมินได้ชั่วคราว</span>
                    </div>
                `;

            } else if (ticket.status === 'Pending_Accept') {
                const submissionType = ticket.solver ? ticket.solver.type : 'Solved';
                
                panel.innerHTML = `
                    <div class="space-y-3">
                        <div class="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 space-y-2">
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">ระบุเหตุผลกรณีต้องการส่งกลับไปดำเนินการใหม่ (Return)</label>
                            <input type="text" id="adm-return-input-reason" placeholder="เช่น การระบุแบริ่งคลาดเคลื่อน หรือขอรูปยืนยันเพิ่ม..." class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-100 placeholder-slate-700 focus:outline-none focus:border-amber-500">
                        </div>

                        <div class="grid grid-cols-2 gap-3.5">
                            <button onclick="triggerReturn('${ticket.id}')" class="bg-slate-950 hover:bg-amber-950/20 text-amber-500 border border-amber-500/20 py-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95">
                                <i class="fa-solid fa-arrow-rotate-left"></i> ตีกลับแก้ไข (Return)
                            </button>
                            <button onclick="triggerAcceptClose('${ticket.id}', '${submissionType}')" class="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs py-3 rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 active:scale-95">
                                <i class="fa-solid fa-check text-slate-950"></i> ตรวจรับจบงาน (Accept)
                            </button>
                        </div>
                    </div>
                `;

            } else if (ticket.status === 'Resolved') {
                panel.innerHTML = `
                    <div class="bg-slate-950/40 p-4 border border-emerald-500/10 rounded-2xl text-center text-xs text-emerald-500 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-circle-check text-base"></i>
                        <span class="font-bold">รายการนี้ได้รับการตรวจสอบเสร็จสิ้นสมบูรณ์แล้ว</span>
                    </div>
                `;
            }
        }

        function triggerAssign(ticketId) {
            const ticket = activeTickets.find(t => t.id === ticketId);
            if (!ticket) return;

            const section = document.getElementById('adm-select-section').value;
            const groupName = document.getElementById('adm-input-group').value.trim();
            const problemName = document.getElementById('adm-input-problem').value.trim();
            const detail = document.getElementById('adm-input-detail').value.trim();
            const assigneeId = document.getElementById('adm-select-assignee').value;
            const severity = document.getElementById('adm-range-severity').value;

            if (!section || !groupName || !problemName || !detail || !assigneeId || !severity) {
                alert("❌ ผิดพลาด: กรุณากรอกข้อมูลส่วนกลาง 1-6 ให้ครบถ้วนสมบูรณ์ก่อนกด Assign!");
                return;
            }

            ticket.admin.section = section;
            ticket.admin.groupName = groupName;
            ticket.admin.problemName = problemName;
            ticket.admin.detail = detail;
            ticket.admin.assigneeId = assigneeId;
            ticket.admin.severity = severity;
            ticket.admin.assignTime = new Date().toLocaleString('th-TH') + ' น.';

            ticket.status = 'Processing';

            renderKanbanBoard();
            selectTicket(ticket.id);
            showToast("fa-solid fa-paper-plane", `Assign ตั๋ว ${ticket.id} และส่งอีเมลแจ้งหัวหน้าแผนกสำเร็จ!`);
        }

        function triggerReject(ticketId) {
            const ticket = activeTickets.find(t => t.id === ticketId);
            if (!ticket) return;

            const rejectReason = document.getElementById('adm-reject-input-reason').value.trim();
            if (!rejectReason) {
                alert("❌ ปฏิเสธไม่ได้: กรุณาระบุเหตุผลกรณีต้องการ Reject ตั๋วคำแจ้ง!");
                return;
            }

            ticket.status = 'Resolved';
            ticket.admin.resolvedType = 'AdminRejected';
            ticket.admin.auditor = document.getElementById('current-admin-display').innerText;
            ticket.admin.auditTime = new Date().toLocaleString('th-TH') + ' น.';

            renderKanbanBoard();
            selectTicket(ticket.id);
            showToast("fa-solid fa-circle-xmark", `ปฏิเสธรับตั๋วคำแจ้ง ${ticket.id} เรียบร้อยแล้ว`);
        }

        function triggerReturn(ticketId) {
            const ticket = activeTickets.find(t => t.id === ticketId);
            if (!ticket) return;

            const returnReason = document.getElementById('adm-return-input-reason').value.trim();
            if (!returnReason) {
                alert("❌ ส่งกลับไม่ได้: ต้องระบุเหตุผลที่ต้องการ Return งานกลับไปแก้ไขเสมอ!");
                return;
            }

            ticket.status = 'Processing';
            ticket.solver = null; // Clean solver responses to wait fresh updates
            ticket.solverDraft = null;

            renderKanbanBoard();
            selectTicket(ticket.id);
            showToast("fa-solid fa-arrow-rotate-left", `ส่งตั๋ว ${ticket.id} กลับไปแก้ไขเรียบร้อยแล้ว: "${returnReason}"`);
        }

        function triggerAcceptClose(ticketId, submissionType) {
            const ticket = activeTickets.find(t => t.id === ticketId);
            if (!ticket) return;

            ticket.status = 'Resolved';
            ticket.admin.auditor = document.getElementById('current-admin-display').innerText;
            ticket.admin.auditTime = new Date().toLocaleString('th-TH') + ' น.';

            if (submissionType === 'Reject') {
                ticket.admin.resolvedType = 'SectionReject';
            } else {
                ticket.admin.resolvedType = 'Solved';
            }

            renderKanbanBoard();
            selectTicket(ticket.id);
            showToast("fa-solid fa-circle-check", `ตรวจรับงานเสร็จสิ้น ปิดตั๋ว ${ticket.id} เรียบร้อยแล้วครับ!`);
        }

        function getAssigneeOptions(sectionId, currentSelectedId) {
            if (!sectionId || !solverDatabase[sectionId]) return '';
            let list = '';
            solverDatabase[sectionId].forEach(solver => {
                list += `<option value="${solver.id}" ${currentSelectedId === solver.id ? 'selected' : ''}>${solver.name}</option>`;
            });
            return list;
        }

        function getAssigneeName(sectionId, assigneeId) {
            if (!sectionId || !assigneeId || !solverDatabase[sectionId]) return 'ไม่ได้กำหนด';
            const solver = solverDatabase[sectionId].find(s => s.id === assigneeId);
            return solver ? solver.name : 'ไม่ได้กำหนด';
        }


        // --- 2. SECTION LEADER (SL) MOBILE CORE LOGIC ---
        function onSLProfileSwitch() {
            currentSolverProfile = document.getElementById('sl-profile-picker').value;
            mobileShowListScreen();
            renderSectionLeaderWorkspace();
        }

        function renderSectionLeaderWorkspace() {
            const container = document.getElementById('mobile-task-list-container');
            const badgeCount = document.getElementById('mobile-badge-count');
            const slNameDisplay = document.getElementById('mobile-title-banner');
            container.innerHTML = '';

            // Fetch SL Metadata
            let currentSLName = "หัวหน้าแผนก";
            let currentSLDept = "";
            for (const dept in solverDatabase) {
                const findSL = solverDatabase[dept].find(s => s.id === currentSolverProfile);
                if (findSL) {
                    currentSLName = findSL.name;
                    currentSLDept = sectionOptionMapping[dept];
                }
            }
            slNameDisplay.innerText = `${currentSLName} (${currentSLDept})`;

            // Filter tickets assigned to this Solver specifically and currently "Processing" (กำลังดำเนินการ)
            const assignedTasks = activeTickets.filter(t => t.status === 'Processing' && t.admin.assigneeId === currentSolverProfile);
            badgeCount.innerText = `${assignedTasks.length} งานค้าง`;

            if (assignedTasks.length === 0) {
                container.innerHTML = `
                    <div class="py-12 text-center text-slate-500 space-y-2">
                        <i class="fa-solid fa-circle-check text-3xl text-emerald-500/20"></i>
                        <p class="text-[11px] font-bold text-slate-400">ไม่มีงานค้างซ่อมบำรุงในแผนกของคุณ 🎉</p>
                        <p class="text-[9.5px] text-slate-600">เมื่อส่วนกลางส่งเรื่องมาใหม่ รายการจะแสดงที่นี่</p>
                    </div>
                `;
                return;
            }

            assignedTasks.forEach(ticket => {
                const card = document.createElement('div');
                card.className = "bg-slate-900 border border-slate-800 hover:border-indigo-500/50 p-3.5 rounded-2xl cursor-pointer transition-all active:scale-98 space-y-2.5 relative";
                card.onclick = () => mobileOpenJobForm(ticket.id);

                // Check draft label
                const draftIndicator = ticket.solverDraft ? `<span class="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded text-[8px] font-bold">บันทึกร่างไว้</span>` : '';

                card.innerHTML = `
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="font-numeric font-bold text-indigo-400">${ticket.id}</span>
                        <span class="text-slate-500 font-numeric">${ticket.admin.assignTime}</span>
                    </div>
                    <div class="text-left">
                        <h4 class="text-xs font-bold text-slate-200 line-clamp-1">${ticket.admin.problemName}</h4>
                        <p class="text-[10px] text-slate-400 line-clamp-2 mt-1">${ticket.admin.detail}</p>
                    </div>
                    <div class="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[9px]">
                        <span class="text-slate-500">ระดับความรุนแรง: <strong class="text-indigo-400">${ticket.admin.severity}</strong></span>
                        ${draftIndicator}
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function mobileShowListScreen() {
            document.getElementById('mobile-screen-list').classList.remove('hidden');
            document.getElementById('mobile-screen-form').classList.add('hidden');
            activeMobileTicket = null;
            tempMobileProofImage = "";
        }

        function mobileOpenJobForm(ticketId) {
            const ticket = activeTickets.find(t => t.id === ticketId);
            if (!ticket) return;

            activeMobileTicket = ticket;

            // Switch Screen
            document.getElementById('mobile-screen-list').classList.add('hidden');
            document.getElementById('mobile-screen-form').classList.remove('hidden');

            // Set static view-only fields in mobile
            document.getElementById('mob-ticket-id').innerText = ticket.id;
            document.getElementById('mob-reporter').innerText = ticket.reporter.name;
            document.getElementById('mob-severity').innerText = `ระดับ ${ticket.admin.severity} / 5`;
            document.getElementById('mob-problem-name').innerText = ticket.admin.problemName;
            document.getElementById('mob-admin-detail').innerText = ticket.admin.detail;

            // Render root causes and solutions checklist lookup mapping inside phone
            renderMobileChecklists(ticket);

            // Populate forms based on solverDraft if exists, else reset
            const rejectToggle = document.getElementById('mob-reject-toggle');
            const rejectReasonText = document.getElementById('mob-reject-reason');
            const causeDetailText = document.getElementById('mob-cause-detail');
            const solutionDetailText = document.getElementById('mob-solution-detail');
            const previewBlock = document.getElementById('mob-proof-preview-block');
            const previewImg = document.getElementById('mob-proof-image-preview');

            if (ticket.solverDraft) {
                const draft = ticket.solverDraft;
                rejectToggle.checked = draft.type === 'Reject';
                rejectReasonText.value = draft.rejectReason || '';
                causeDetailText.value = draft.causesDetail || '';
                solutionDetailText.value = draft.solutionsDetail || '';
                
                // restore checklists selections
                draft.causes.forEach(rcId => {
                    const chk = document.getElementById(`mob-chk-cause-${rcId}`);
                    if (chk) chk.checked = true;
                });
                draft.solutions.forEach(solId => {
                    const chk = document.getElementById(`mob-chk-sol-${solId}`);
                    if (chk) chk.checked = true;
                });

                if (draft.proofImage) {
                    tempMobileProofImage = draft.proofImage;
                    previewBlock.classList.remove('hidden');
                    previewImg.src = draft.proofImage;
                } else {
                    tempMobileProofImage = "";
                    previewBlock.classList.add('hidden');
                }
            } else {
                rejectToggle.checked = false;
                rejectReasonText.value = '';
                causeDetailText.value = '';
                solutionDetailText.value = '';
                tempMobileProofImage = "";
                previewBlock.classList.add('hidden');
            }

            toggleMobileRejectForm();
        }

        function renderMobileChecklists(ticket) {
            const causesContainer = document.getElementById('mob-causes-checkboxes-container');
            const solutionsContainer = document.getElementById('mob-solutions-checkboxes-container');

            causesContainer.innerHTML = '';
            solutionsContainer.innerHTML = '';

            // Root causes checklist
            for (const rcId in rootCausesLookup) {
                causesContainer.innerHTML += `
                    <label class="flex items-center gap-2.5 bg-slate-950 p-2.5 rounded-xl border border-slate-800 cursor-pointer text-[10.5px]">
                        <input type="checkbox" id="mob-chk-cause-${rcId}" value="${rcId}" class="accent-indigo-500 rounded bg-slate-900 border-slate-700">
                        <span class="text-slate-300">${rootCausesLookup[rcId]} <strong class="text-slate-500 font-numeric text-[9px]">(${rcId})</strong></span>
                    </label>
                `;
            }

            // Solutions checklist
            for (const solId in solutionsLookup) {
                solutionsContainer.innerHTML += `
                    <label class="flex items-center gap-2.5 bg-slate-950 p-2.5 rounded-xl border border-slate-800 cursor-pointer text-[10.5px]">
                        <input type="checkbox" id="mob-chk-sol-${solId}" value="${solId}" class="accent-indigo-500 rounded bg-slate-900 border-slate-700">
                        <span class="text-slate-300">${solutionsLookup[solId]} <strong class="text-slate-500 font-numeric text-[9px]">(${solId})</strong></span>
                    </label>
                `;
            }
        }

        function toggleMobileRejectForm() {
            const isReject = document.getElementById('mob-reject-toggle').checked;
            const rejectGroup = document.getElementById('mob-reject-input-group');
            const maintenanceGroup = document.getElementById('mob-maintenance-group');

            if (isReject) {
                rejectGroup.classList.remove('hidden');
                maintenanceGroup.classList.add('hidden');
            } else {
                rejectGroup.classList.add('hidden');
                maintenanceGroup.classList.remove('hidden');
            }
        }

        function triggerMobileProofUpload() {
            // Simulated camera picture upload
            const randomID = Math.floor(100 + Math.random() * 900);
            tempMobileProofImage = `https://placehold.co/400x300/1e293b/34d399?text=Solved+PMC+Device+${randomID}`;

            const previewBlock = document.getElementById('mob-proof-preview-block');
            const previewImg = document.getElementById('mob-proof-image-preview');

            previewBlock.classList.remove('hidden');
            previewImg.src = tempMobileProofImage;

            showToast("fa-solid fa-camera", "จำลองอัปโหลดภาพหลักฐานการซ่อมแซมสำเร็จ!");
        }

        function clearMobileProofImage() {
            tempMobileProofImage = "";
            document.getElementById('mob-proof-preview-block').classList.add('hidden');
        }


        // --- 3. SAVE DRAFT & SUBMIT ACTIONS ---
        function gatherMobileFormData() {
            const isReject = document.getElementById('mob-reject-toggle').checked;
            
            // Collect checklists
            const selectedCauses = [];
            for (const rcId in rootCausesLookup) {
                const el = document.getElementById(`mob-chk-cause-${rcId}`);
                if (el && el.checked) selectedCauses.push(rcId);
            }

            const selectedSolutions = [];
            for (const solId in solutionsLookup) {
                const el = document.getElementById(`mob-chk-sol-${solId}`);
                if (el && el.checked) selectedSolutions.push(solId);
            }

            return {
                type: isReject ? 'Reject' : 'Solved',
                causes: selectedCauses,
                causesDetail: document.getElementById('mob-cause-detail').value.trim(),
                solutions: selectedSolutions,
                solutionsDetail: document.getElementById('mob-solution-detail').value.trim(),
                proofImage: tempMobileProofImage,
                rejectReason: document.getElementById('mob-reject-reason').value.trim()
            };
        }

        function saveMobileDraft() {
            if (!activeMobileTicket) return;

            const formData = gatherMobileFormData();
            activeMobileTicket.solverDraft = formData;

            // Save visual representation and refresh
            renderSectionLeaderWorkspace();
            showToast("fa-regular fa-bookmark", `บันทึกร่างข้อมูลตั๋ว ${activeMobileTicket.id} ในเครื่องของคุณเรียบร้อย`);
        }

        function submitMobileComplete() {
            if (!activeMobileTicket) return;

            const data = gatherMobileFormData();

            // VALIDATION REQUIREMENT AS REQUESTED
            if (data.type === 'Reject') {
                if (!data.rejectReason) {
                    alert("❌ ไม่สามารถส่งเรื่องได้: กรุณากรอกระบุเหตุผลในการปฏิเสธงานซ่อมด้วยค่ะ");
                    return;
                }
            } else {
                // Solved validation
                if (data.causes.length === 0) {
                    alert("❌ กรุณาเลือกสาเหตุปัญหา (Root Causes) อย่างน้อย 1 รายการ");
                    return;
                }
                if (!data.causesDetail) {
                    alert("❌ กรุณากรอกรายละเอียดสาเหตุปัญหา");
                    return;
                }
                if (data.solutions.length === 0) {
                    alert("❌ กรุณาเลือกวิธีแก้ไขปัญหา (Solutions) อย่างน้อย 1 รายการ");
                    return;
                }
                if (!data.solutionsDetail) {
                    alert("❌ กรุณากรอกรายละเอียดวิธีแก้ไข");
                    return;
                }
                if (!data.proofImage) {
                    alert("❌ กรุณากดถ่ายภาพหรือแนบหลักฐานการซ่อมแซมแก้ไขก่อนส่งตรวจ");
                    return;
                }
            }

            // If validated successfully:
            // 1. Commit draft data to solver property
            activeMobileTicket.solver = data;
            activeMobileTicket.solverDraft = null; // Reset draft
            
            // 2. Change Ticket Status to "Pending_Accept" (รอตรวจรับ) as requested!
            activeMobileTicket.status = 'Pending_Accept';

            // 3. Reset mobile screen to task list, notify
            mobileShowListScreen();
            renderSectionLeaderWorkspace();
            
            showToast("fa-solid fa-cloud-arrow-up", "ส่งผลการดำเนินงานเรียบร้อยแล้ว! สถานะตั๋วเปลี่ยนเป็น 'รอตรวจรับ'");
        }


        // --- UTILS & GLOBAL ALERTS ---
        function showToast(iconClass, message) {
            const toast = document.getElementById('admin-toast');
            document.getElementById('toast-icon').innerHTML = `<i class="${iconClass}"></i>`;
            document.getElementById('toast-message').innerText = message;

            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3500);
        }
    