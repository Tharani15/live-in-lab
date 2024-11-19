// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Function to navigate to a specific section
    function navigateTo(sectionId) {
        const optionsContainer = document.getElementById('options-container');
        const sectionContent = document.getElementById('section-content');

        if (optionsContainer && sectionContent) {
            optionsContainer.style.display = 'none';
            sectionContent.style.display = 'block';
        }

        hideAllSections();

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // Function to go back to the main options
    function goBackToOptions() {
        const optionsContainer = document.getElementById('options-container');
        const sectionContent = document.getElementById('section-content');

        if (optionsContainer && sectionContent) {
            optionsContainer.style.display = 'block';
            sectionContent.style.display = 'none';
        }

        hideAllSections();
    }

    // Function to hide all sections
    function hideAllSections() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Placeholder functions for specific actions in each section
    function startChatBot() {
        const nutritionStatus = document.getElementById('nutrition-status');
        if (nutritionStatus) {
            nutritionStatus.textContent = "ChatBot is suggesting meals...";
            nutritionStatus.style.color = "#007bff"; // Optional: Change text color
        }
    }

    function suggestHealthMeals() {
        const healthStatus = document.getElementById('health-status');
        if (healthStatus) {
            healthStatus.textContent = "Here are meal suggestions for your health condition.";
            healthStatus.style.color = "#28a745"; // Optional: Change text color
        }
    }

    function exploreMeals() {
        const casualStatus = document.getElementById('casual-status');
        if (casualStatus) {
            casualStatus.textContent = "Exploring more home-cooked meal options.";
            casualStatus.style.color = "#ff9900"; // Optional: Change text color
        }
    }

    // Attach event listeners to navigation buttons (using data attributes)
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function () {
            const targetSection = this.getAttribute('data-target');
            if (targetSection) {
                navigateTo(targetSection);
            }
        });
    });

    // Back button functionality
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', goBackToOptions);
    }

    // Attach event listeners for section-specific actions
    const chatBotButton = document.getElementById('start-chatbot');
    if (chatBotButton) {
        chatBotButton.addEventListener('click', startChatBot);
    }

    const healthMealsButton = document.getElementById('suggest-health-meals');
    if (healthMealsButton) {
        healthMealsButton.addEventListener('click', suggestHealthMeals);
    }

    const exploreMealsButton = document.getElementById('explore-meals');
    if (exploreMealsButton) {
        exploreMealsButton.addEventListener('click', exploreMeals);
    }

    // Expose functions to the global scope if needed
    window.navigateTo = navigateTo;
    window.goBackToOptions = goBackToOptions;
    window.startChatBot = startChatBot;
    window.suggestHealthMeals = suggestHealthMeals;
    window.exploreMeals = exploreMeals;
});



