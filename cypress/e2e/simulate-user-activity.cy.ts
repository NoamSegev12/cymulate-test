import {candidate} from '../fixtures/login/user';
import {assessmentReports, reports} from '../fixtures/navigation/pages';
import {
  navigateToAttackReport,
  navigateToHistory
} from '../support/reports/assessment-reports/web-application-firewall';
import {
  generateReport,
  validateAssessmentStatus,
  validateAttackUrl,
  validateScoreText
} from '../support/reports/assessment-reports/attack-history';

describe('Simulate user activity', () => {
  before(() => {
    cy.login(candidate)
      .navigate(reports)
      .navigate(assessmentReports)
  });

  it('Navigates to attack report', () => {
    navigateToHistory();
    navigateToAttackReport();
  });

  it('Validates data', () => {
    validateAttackUrl();
    validateAssessmentStatus();
    validateScoreText();
  });

  it('Generates report', () => {
    generateReport()
  });
});