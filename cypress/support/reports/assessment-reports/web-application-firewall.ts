import {getAttackReportLocator, getWAFHistoryLocator} from '../../../fixtures/reports/assessment-reports/locators';
import {user} from '../../../fixtures/login/constants';
import {attackId} from '../../../fixtures/reports/assessment-reports/constants';

export const navigateToHistory = () => {
  cy.get(getWAFHistoryLocator(user)).click();
};

export const navigateToAttackReport = () => {
  cy.get(getAttackReportLocator(attackId, user)).first().click();
}