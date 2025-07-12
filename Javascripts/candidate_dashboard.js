document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger menu functionality ---
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        overlay.classList.remove('active');
    });

    // --- Personalize Welcome Message ---
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    const loggedInUserName = sessionStorage.getItem('loggedInUserName'); // Retrieve from sessionStorage

    if (welcomeMessageElement && loggedInUserName) {
        const displayUserName = loggedInUserName.charAt(0).toUpperCase() + loggedInUserName.slice(1);
        welcomeMessageElement.textContent = `Welcome, ${displayUserName}!`;
    } else if (welcomeMessageElement) {
        welcomeMessageElement.textContent = `Welcome, Student!`;
    }

    // --- Dynamic Dashboard Content Data (Dummy Data) ---

    // Announcements data
    const announcements = [
        { title: "New Course: Advanced Robotics", date: "July 15, 2025" },
        { title: "Holiday Notice: Independence Day", date: "August 15, 2025" },
        { title: "Workshop: Interview Skills for Placements", date: "August 20, 2025" },
        { title: "Registration for next batch open!", date: "September 01, 2025" }
    ];

    // Upcoming Placements data
    const placements = [
        { company: "Global Tech Solutions", role: "Mobile Repair Technician", date: "July 25, 2025", course: "Mobile Repair and Service" },
        { company: "Spark Electrics Pvt. Ltd.", role: "Junior Electrician", date: "August 10, 2025", course: "Electrician Assistant & Home Appliances Repair" },
        { company: "Fashion Forward Studio", role: "Apprentice Designer", date: "August 28, 2025", course: "Fashion Designing" },
        { company: "Creative Hub Agencies", role: "Craft Assistant", date: "September 05, 2025", course: "Art & Craft" }
    ];

    // Monthly Activity Plan data (UPDATED STRUCTURE)
    const monthlyActivityPlan = [
        { month: "July 2025", activities: [
            { date: "Jul 15", program: "Coding Challenge", duration: "2 hrs", place: "Online", target: "Skill Dev", project: "Build a calculator app" },
            { date: "Jul 22", program: "Guest Lecture", duration: "1.5 hrs", place: "Auditorium", target: "Industry Insights", project: "N/A" }
        ]},
        { month: "August 2025", activities: [
            { date: "Aug 05", program: "Project Workshop", duration: "3 hrs", place: "Lab 3", target: "Practical Skills", project: "Mobile phone diagnostics" },
            { date: "Aug 12", program: "Career Counseling", duration: "1 hr", place: "Online", target: "Future Planning", project: "Resume building" },
            { date: "Aug 25", program: "Skill Assessment", duration: "4 hrs", place: "Exam Hall", target: "Performance Eval", project: "All previous modules" }
        ]},
        { month: "September 2025", activities: [
            { date: "Sep 02", program: "Field Trip", duration: "All Day", place: "Local Industry", target: "Exposure", project: "Industry observation report" }
        ]}
    ];


    // Tech4Hope Videos data (using actual example YouTube embed URLs)
    const videos = [
        { title: "Basic Mobile Phone Repair Guide", embedUrl: "https://www.youtube.com/results?search_query=Tech4Hope&sp=EgIQAQ%253D%253D1" },
        { title: "Introduction to Electrical Wiring", embedUrl: "https://www.youtube.com/results?search_query=Tech4Hope&sp=EgIQAQ%253D%253D2" },
        { title: "Learn Fashion Figure Sketching", embedUrl: "https://www.youtube.com/results?search_query=Tech4Hope&sp=EgIQAQ%253D%253D3" },
        { title: "Easy Paper Craft Ideas for Everyone", embedUrl: "https://www.youtube.com/results?search_query=Tech4Hope&sp=EgIQAQ%253D%253D4" }
    ];


    // --- Functions to Populate Dashboard Sections ---

    // Populates the Announcements list
    function populateAnnouncements() {
        const announcementsList = document.getElementById('announcementsList');
        if (announcements.length === 0) {
            announcementsList.innerHTML = '<li class="no-data">No new announcements.</li>';
            return;
        }
        announcementsList.innerHTML = '';
        announcements.forEach(announcement => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<i class="fas fa-bell"></i> <strong>${announcement.title}</strong> - ${announcement.date}`;
            announcementsList.appendChild(listItem);
        });
    }

    // Populates the Upcoming Placements list
    function populatePlacements() {
        const placementsList = document.getElementById('placementsList');
        if (placements.length === 0) {
            placementsList.innerHTML = '<li class="no-data">No upcoming placements.</li>';
            return;
        }
        placementsList.innerHTML = '';
        placements.forEach(placement => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<i class="fas fa-briefcase"></i> **Company:** ${placement.company} | **Role:** ${placement.role} | **Date:** ${placement.date}`;
            placementsList.appendChild(listItem);
        });
    }

    // Populates the Monthly Activity Plan (NEW/MODIFIED)
    function populateMonthlyActivityPlan() {
        const monthlyActivityList = document.getElementById('monthlyActivityList');
        if (monthlyActivityPlan.length === 0) {
            monthlyActivityList.innerHTML = '<li class="no-data">No activities planned.</li>';
            return;
        }
        monthlyActivityList.innerHTML = ''; // Clear existing content

        monthlyActivityPlan.forEach(monthData => {
            const monthHeader = document.createElement('li');
            monthHeader.classList.add('activity-month-header');
            monthHeader.innerHTML = `<i class="fas fa-calendar-alt"></i> ${monthData.month}`;
            monthlyActivityList.appendChild(monthHeader);

            if (monthData.activities.length === 0) {
                const noActivitiesItem = document.createElement('li');
                noActivitiesItem.classList.add('activity-item', 'no-data');
                noActivitiesItem.textContent = "No activities for this month.";
                monthlyActivityList.appendChild(noActivitiesItem);
            } else {
                monthData.activities.forEach(activity => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('activity-item');
                    listItem.innerHTML = `
                        <span><strong>Date:</strong> ${activity.date}</span>
                        <span><strong>Program:</strong> ${activity.program}</span>
                        <span><strong>Duration:</strong> ${activity.duration}</span>
                        <span><strong>Place:</strong> ${activity.place}</span>
                        <span><strong>Target:</strong> ${activity.target}</span>
                        <span><strong>Project:</strong> ${activity.project}</span>
                    `;
                    monthlyActivityList.appendChild(listItem);
                });
            }
        });
    }

    // Populates the Tech4Hope Videos grid
    function populateTech4HopeVideos() {
        const videoGrid = document.getElementById('tech4hopeVideos');
        if (videos.length === 0) {
            videoGrid.innerHTML = '<p class="no-data" style="text-align: center;">No videos available at the moment.</p>';
            return;
        }
        videoGrid.innerHTML = '';
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.innerHTML = `
                <h4>${video.title}</h4>
                <iframe src="${video.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            videoGrid.appendChild(videoItem);
        });
    }

    // --- Initial Load and Dynamic Updates ---

    // Call functions to populate sections on page load
    populateAnnouncements();
    populatePlacements();
    populateMonthlyActivityPlan(); // Call the updated function
    populateTech4HopeVideos();

    // Set active link in sidebar based on current page URL
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});