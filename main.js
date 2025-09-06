
const lenis = new Lenis({
    duration: 2,
    lerp: 0.1,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


function openModal(modalId) { document.getElementById(modalId).style.display = 'flex'; }
function closeModal(modalId) { document.getElementById(modalId).style.display = 'none'; }

function selectOption(element, isCorrect, feedbackId) {
    const options = element.parentNode.querySelectorAll('.quiz-option');
    options.forEach(opt => { opt.classList.remove('correct', 'incorrect'); opt.style.pointerEvents = 'none'; });

    const msgCorrect = '✅ Correct! Following teacher\'s instructions ensures orderly evacuation and everyone\'s safety.';
    const msgWrong = '❌ Not quite right. Always follow your teacher\'s evacuation instructions for safety.';

    if (isCorrect) {
        element.classList.add('correct');
        showFeedback(msgCorrect, 'green', feedbackId);
    } else {
        element.classList.add('incorrect');
        options.forEach(opt => { if (opt.onclick && opt.onclick.toString().includes('true')) opt.classList.add('correct'); });
        showFeedback(msgWrong, 'red', feedbackId);
    }
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.style.display = 'inline-block';
}

function showFeedback(message, color, feedbackId) {
    const targetId = feedbackId || 'quiz-feedback';
    const feedback = document.getElementById(targetId);
    if (!feedback) return;
    feedback.textContent = message; feedback.style.color = color; feedback.style.display = 'block';
}

//onlicking next question in live demo
function nextSimulation() {
    // alert('🎉 Great job! In the full platform, you\'d continue to the next disaster scenario. Your progress has been saved!');
    // if (window.saveModuleProgress) { try { window.saveModuleProgress('fireSafety', 75); } catch (e) { } }
    // closeModal('demoModal');

    const modalContent = document.querySelector("#demoModal");
    modalContent.innerHTML

}

function startSimulation() {
    alert('🔥 Fire Safety Simulation Starting...\n\nIn the full version, this would launch an interactive 3D simulation where you navigate through evacuation procedures!');
}

// Feature Demos
function showFeatureDemo(feature) {
    const content = document.getElementById('featureContent');
    const demoContent = {
        'simulations': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">🌍 Interactive Simulations Demo</h2>
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                        <h3>🔥 Fire Evacuation Simulation</h3>
                        <p><strong>Scenario:</strong> School fire alarm activated</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #ef4444;">
                                <strong>Step 1:</strong> Stop current activity<br>
                                <small>✅ Completed in 2 seconds</small>
                            </div>
                            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                                <strong>Step 2:</strong> Listen to instructions<br>
                                <small>⏳ In progress...</small>
                            </div>
                        </div>
                        <button class="btn" onclick="alert('🎮 In the full version, this would launch a 3D interactive simulation!')">Launch 3D Simulation</button>
                    </div>
                `,
        'gamification': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">🎮 Gamified Learning Demo</h2>
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                        <h3>Student Achievement System</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 1rem;">
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 2rem;">🏅</div>
                                <strong>Fire Safety Expert</strong><br>
                                <small>Earned: Dec 2024</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 2rem;">🌊</div>
                                <strong>Flood Response Pro</strong><br>
                                <small>75% Progress</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px; opacity: 0.6;">
                                <div style="font-size: 2rem;">🌍</div>
                                <strong>Earthquake Master</strong><br>
                                <small>Locked</small>
                            </div>
                        </div>
                        <div style="margin-top: 1rem;">
                            <strong>Current Streak: 7 days</strong> 🔥<br>
                            <small>Class Ranking: #3 out of 45 students</small>
                        </div>
                    </div>
                `,
        'analytics': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">📊 Teacher Dashboard Demo</h2>
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                        <h3>Class 10-A Performance Overview</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin: 1rem 0;">
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 1.5rem; color: #22c55e; font-weight: bold;">78%</div>
                                <small>Average Score</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 1.5rem; color: #3b82f6; font-weight: bold;">42/45</div>
                                <small>Active Students</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 1.5rem; color: #f59e0b; font-weight: bold;">3</div>
                                <small>Need Attention</small>
                            </div>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                            <strong>Recent Activity:</strong><br>
                            • Rahul completed Fire Safety module<br>
                            • Priya earned "First Aid Expert" badge<br>
                            • 5 students need to retake earthquake quiz<br>
                        </div>
                    </div>
                `,
        'certification': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">🏆 Digital Certification Demo</h2>
                    <div class="cert-card">
                        <div class="cert-inner">
                            <h3 style="margin-bottom: .5rem;">CERTIFICATE OF COMPLETION</h3>
                            <p style="font-size: 1.2rem; margin: .75rem 0;">This certifies that</p>
                            <p style="font-size: 1.6rem; font-weight: 700;">{{ Student Name }}</p>
                            <p style="margin: .75rem 0;">has successfully completed the <strong>Fire Safety</strong> module with distinction.</p>
                            <p class="badge">Issued: Jan 2025 • ID: CERT-XS29F</p>
                        </div>
                        <div style="margin-top: 1rem;">
                            <button class="btn" onclick="alert('🎓 In production, this will generate a signed digital certificate (PDF) with a verification QR.')">Generate PDF</button>
                        </div>
                    </div>
                `,
        'mobile': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">📱 Mobile-First Experience</h2>
                    <div style="background:#f8fafc; padding:1.5rem; border-radius:10px;">
                        <p>Optimized layout scales beautifully on phones and tablets. Touch-friendly buttons, large tap targets, and offline-ready modules (PWA-ready in roadmap).</p>
                        <ul style="margin-top: .75rem; padding-left: 1.25rem;">
                            <li>Responsive grid & typography</li>
                            <li>Accessible contrast & focus states</li>
                            <li>Low bandwidth friendly assets</li>
                        </ul>
                    </div>
                `,
    };
    content.innerHTML = demoContent[feature] || '<p>Demo coming soon.</p>';
    openModal('featureModal');
}

// Auth modal toggling (login/signup) — UI only; actions handled in Firebase block
let authMode = 'login';
function toggleAuthMode(e) {
    if (e) e.preventDefault();
    authMode = authMode === 'login' ? 'signup' : 'login';
    document.getElementById('authTitle').textContent = authMode === 'login' ? 'Login to DisasterED Pro' : 'Create your DisasterED Pro account';
    document.getElementById('authSubmitBtn').textContent = authMode === 'login' ? 'Sign In' : 'Sign Up';
    document.getElementById('authToggleCopy').textContent = authMode === 'login' ? 'New user?' : 'Already have an account?';
    document.getElementById('authToggleLink').textContent = authMode === 'login' ? 'Create Account' : 'Sign In';
}

// This is intercepted by Firebase block below
function handleLogin(event) { event.preventDefault(); }
function startSimulation() {
    window.open('questions.html', '_blank');
}

// --------------------------------------------------------

const home_btn = document.querySelector('.home-btn');
const about_btn = document.querySelector('.about-btn');
const features_btn = document.querySelector('.features-btn');
const demo_btn = document.querySelector('.demo-btn');

home_btn.addEventListener('click', () => {
    lenis.scrollTo('#home', {
        duration: 2, 
        lerp: 0.1,
    })
})

about_btn.addEventListener('click', ()=> {
    lenis.scrollTo('#about', {
        duration: 2, 
        lerp: 0.1,
    })
})

features_btn.addEventListener('click', () => {
    lenis.scrollTo('#features', {
        duration: 2,
        lerp:0.1,
    })
})

demo_btn.addEventListener('click', () => {
    lenis.scrollTo('#demo', {
        duration: 2, 
        lerp: 0.1,
    })
})

about_btn.addEventListener('click', () => {
    lenis.scrollTo('#about', {
        duration: 2, 
        lerp: 0.1,
    })
})


// Weather API Integration
const API_KEY = "d5e1cb20784b4677aa4184213250509";
let weatherData = null;

function fetchWeatherData() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=1&alerts=yes`;
                    
                    fetch(url)
                        .then(res => {
                            return res.json();
                        })
                        .then(data => {
                            weatherData = data;
                            resolve(data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                },
                error => {
                    reject(error);
                }
            );
        } else {
            reject(new Error("Geolocation not supported"));
        }
    });
}

function generateWeatherAlertHTML(data) {
    
    let alertHTML = `
        <h2 style="color: #667eea; margin-bottom: 1rem;">🌐 Live Weather Alerts</h2>
        <div style="background:#f8fafc; padding:1.5rem; border-radius:10px;">
    `;
    
    if (data && data.location) {
        console.log("Location data found:", data.location);
        alertHTML += `<p style="margin-bottom: 1rem;"><strong>📍 Location:</strong> ${data.location.name}, ${data.location.region}, ${data.location.country}</p>`;
        
        if (data.alerts && data.alerts.alert && data.alerts.alert.length > 0) {
            console.log("Weather alerts found:", data.alerts.alert);
            alertHTML += `<h4 style="color: #dc2626; margin-bottom: 0.5rem;">🚨 Active Weather Alerts</h4>`;
            
            data.alerts.alert.forEach((alert, index) => {
                console.log(`Processing alert ${index}:`, alert);
                alertHTML += `
                    <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 1rem;">
                        <h5 style="color: #dc2626; margin-bottom: 0.5rem;">${alert.headline}</h5>
                        <p style="margin-bottom: 0.5rem;"><strong>Event:</strong> ${alert.event}</p>
                        <p style="margin-bottom: 0.5rem;"><strong>Description:</strong> ${alert.desc}</p>
                        ${alert.instruction ? `<p style="margin-bottom: 0.5rem;"><strong>Safety Instructions:</strong> ${alert.instruction}</p>` : ''}
                        <p style="font-size: 0.85rem; color: #666;">
                            <strong>Effective:</strong> ${new Date(alert.effective).toLocaleString()} | 
                            <strong>Expires:</strong> ${new Date(alert.expires).toLocaleString()}
                        </p>
                    </div>
                `;
            });
        } else {
            console.log("No weather alerts found");
            alertHTML += `
                <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #16a34a;">
                    <p style="color: #16a34a;">✅ No active weather alerts for your location.</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Stay safe and keep monitoring weather conditions!</p>
                </div>
            `;
        }
        
        if (data.forecast && data.forecast.forecastday && data.forecast.forecastday[0]) {
            console.log("Forecast data found:", data.forecast.forecastday[0]);
            const today = data.forecast.forecastday[0];
            alertHTML += `
                <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <h4 style="margin-bottom: 0.5rem; color: #4f46e5;">Today's Forecast</h4>
                    <p><strong>High:</strong> ${today.day.maxtemp_c}°C | <strong>Low:</strong> ${today.day.mintemp_c}°C</p>
                    <p><strong>Condition:</strong> ${today.day.condition.text}</p>
                    <p><strong>Chance of Rain:</strong> ${today.day.daily_chance_of_rain}%</p>
                </div>
            `;
        }
        
        alertHTML += `
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="refreshWeatherData()" style="background: #4f46e5; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">
                    🔄 Refresh Weather Data
                </button>
            </div>
        `;
    } else {
        console.log("No valid weather data received");
        alertHTML += `
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <p style="color: #f59e0b;">⚠️ Unable to fetch weather data. Please check your location permissions and try again.</p>
                <button onclick="refreshWeatherData()" style="background: #4f46e5; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; margin-top: 0.5rem;">
                    Try Again
                </button>
            </div>
        `;
    }
    
    alertHTML += `
            <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">
                Content tailored to Indian regions, hazards, and languages. Data updates every 15 minutes.
            </p>
        </div>
    `;
    
    console.log("Generated HTML length:", alertHTML.length);
    return alertHTML;
}

function refreshWeatherData() {
    console.log("Refresh weather data called");
    const content = document.getElementById('featureContent');
    console.log("Feature content element found:", !!content);
    
    if (content) {
        content.innerHTML = `
            <h2 style="color: #667eea; margin-bottom: 1rem;">🌐 Live Weather Alerts</h2>
            <div style="background:#f8fafc; padding:1.5rem; border-radius:10px; text-align: center;">
                <p>🔄 Loading weather data...</p>
            </div>
        `;
        console.log("Loading state set");
    }
    
    fetchWeatherData()
        .then(data => {
            console.log("Weather data fetched successfully");
            if (content) {
                const html = generateWeatherAlertHTML(data);
                content.innerHTML = html;
                console.log("HTML updated in DOM");
            }
        })
        .catch(err => {
            console.error("Error in refresh weather data:", err);
            if (content) {
                content.innerHTML = generateWeatherAlertHTML(null);
                console.log("Error state HTML set");
            }
        });
}

function showFeatureDemo(feature) {
    console.log("showFeatureDemo called with feature:", feature);
    const content = document.getElementById('featureContent');
    console.log("featureContent element exists:", !!content);
    
    const demoContent = {
        'simulations': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">🌍 Interactive Simulations Demo</h2>
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                        <h3>🔥 Fire Evacuation Simulation</h3>
                        <p><strong>Scenario:</strong> School fire alarm activated</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #ef4444;">
                                <strong>Step 1:</strong> Stop current activity<br>
                                <small>✅ Completed in 2 seconds</small>
                            </div>
                            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                                <strong>Step 2:</strong> Listen to instructions<br>
                                <small>⏳ In progress...</small>
                            </div>
                        </div>
                        <button class="btn" onclick="alert('🎮 In the full version, this would launch a 3D interactive simulation!')">Launch 3D Simulation</button>
                    </div>
                `,
        'gamification': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">🎮 Gamified Learning Demo</h2>
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                        <h3>Student Achievement System</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 1rem;">
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 2rem;">🏅</div>
                                <strong>Fire Safety Expert</strong><br>
                                <small>Earned: Dec 2024</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 2rem;">🌊</div>
                                <strong>Flood Response Pro</strong><br>
                                <small>75% Progress</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px; opacity: 0.6;">
                                <div style="font-size: 2rem;">🌍</div>
                                <strong>Earthquake Master</strong><br>
                                <small>Locked</small>
                            </div>
                        </div>
                        <div style="margin-top: 1rem;">
                            <strong>Current Streak: 7 days</strong> 🔥<br>
                            <small>Class Ranking: #3 out of 45 students</small>
                        </div>
                    </div>
                `,
        'analytics': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">📊 Teacher Dashboard Demo</h2>
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                        <h3>Class 10-A Performance Overview</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin: 1rem 0;">
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 1.5rem; color: #22c55e; font-weight: bold;">78%</div>
                                <small>Average Score</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 1.5rem; color: #3b82f6; font-weight: bold;">42/45</div>
                                <small>Active Students</small>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                                <div style="font-size: 1.5rem; color: #f59e0b; font-weight: bold;">3</div>
                                <small>Need Attention</small>
                            </div>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                            <strong>Recent Activity:</strong><br>
                            • Rahul completed Fire Safety module<br>
                            • Priya earned "First Aid Expert" badge<br>
                            • 5 students need to retake earthquake quiz<br>
                        </div>
                    </div>
                `,
        'certification': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">🏆 Digital Certification Demo</h2>
                    <div class="cert-card">
                        <div class="cert-inner">
                            <h3 style="margin-bottom: .5rem;">CERTIFICATE OF COMPLETION</h3>
                            <p style="font-size: 1.2rem; margin: .75rem 0;">This certifies that</p>
                            <p style="font-size: 1.6rem; font-weight: 700;">{{ Student Name }}</p>
                            <p style="margin: .75rem 0;">has successfully completed the <strong>Fire Safety</strong> module with distinction.</p>
                            <p class="badge">Issued: Jan 2025 • ID: CERT-XS29F</p>
                        </div>
                        <div style="margin-top: 1rem;">
                            <button class="btn" onclick="alert('🎓 In production, this will generate a signed digital certificate (PDF) with a verification QR.')">Generate PDF</button>
                        </div>
                    </div>
                `,
        'mobile': `
                    <h2 style="color: #667eea; margin-bottom: 1rem;">📱 Mobile-First Experience</h2>
                    <div style="background:#f8fafc; padding:1.5rem; border-radius:10px;">
                        <p>Optimized layout scales beautifully on phones and tablets. Touch-friendly buttons, large tap targets, and offline-ready modules (PWA-ready in roadmap).</p>
                        <ul style="margin-top: .75rem; padding-left: 1.25rem;">
                            <li>Responsive grid & typography</li>
                            <li>Accessible contrast & focus states</li>
                            <li>Low bandwidth friendly assets</li>
                        </ul>
                    </div>
                `
    };
    
    if (feature === 'localization') {
        console.log("Localization feature selected - loading weather data");
        content.innerHTML = `
            <h2 style="color: #667eea; margin-bottom: 1rem;">🌐 Live Weather Alerts</h2>
            <div style="background:#f8fafc; padding:1.5rem; border-radius:10px; text-align: center;">
                <p>🔄 Loading weather data...</p>
            </div>
        `;
        
        fetchWeatherData()
            .then(data => {
                console.log("Weather data received in showFeatureDemo");
                const html = generateWeatherAlertHTML(data);
                content.innerHTML = html;
            })
            .catch(err => {
                console.error("Error in showFeatureDemo weather fetch:", err);
                content.innerHTML = generateWeatherAlertHTML(null);
            });
    } else {
        console.log("Regular feature selected:", feature);
        content.innerHTML = demoContent[feature] || '<p>Demo coming soon.</p>';
    }
    
    openModal('featureModal');
    console.log("Modal should be opened");
}

