import {moduleSummaryTitleLocator, scoreTextLocator} from '../../../fixtures/reports/assessment-reports/locators';
import {assessmentStatus, attackUrl, scoreText} from '../../../fixtures/reports/assessment-reports/expected-results';
import {getDataForLocator} from '../../common/create-locator';

export const validateAttackUrl = () => {
  cy.contains(moduleSummaryTitleLocator, 'URL')
    .next()
    .should('have.text', attackUrl);
}

export const validateAssessmentStatus = () => {
  cy.get(getDataForLocator('assessment_status')).should('have.text', assessmentStatus);
}

export const validateScoreText = () => {
  cy.get(scoreTextLocator).should('have.text', scoreText);
}

export const generateReport = () => {
  cy.contains('Generate Report')
    .click()
    .get('button.btn.cymulate-btn.btn-margin')
    .contains('CSV')
    .click({force: true});
}