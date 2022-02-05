export const types = {
    /* UI Types */
    uiOpenModal: '[UI] Open modal',
    uiCloseModal: '[UI] Close modal',

    /* Calendar Types */
    eventSetActive: '[EVENT] Start add active',
    eventStartAddNew: '[EVENT] Add new',
    eventAddNew: '[EVENT] Add new',
    eventClearActiveEvent: '[EVENT] Clear active event',
    eventUpdated: '[EVENT] Event updated',
    eventDeleted: '[EVENT] Event deleted',
    eventLoaded: '[EVENT] Events Loaded',
    eventLogout: '[EVENT] Logout clear events',

    /* Auth Types */
    authCheckingFinish:'[AUTH] Finish checking login state',
    authStartLogin:'[AUTH] Start login',
    authLogin:'[AUTH] Login',
    authStartRegister:'[AUTH] Start register',
    authStartTokenRenew:'[AUTH] Start token renew',
    authLogout:'[AUTH] Logout',
}