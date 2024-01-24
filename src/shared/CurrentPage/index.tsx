const lungOverviewPage = '/lung-cancer/overview';
const liverOverviewPage = '/liver-cancer/overview';
const breastOverviewPage = '/breast-cancer/overview';
const thyroidOverviewPage = '/thyroid-cancer/overview';
const colorectalOverviewPage = '/colorectal-cancer/overview';

const lungCancerPage = '/lung-cancer/gene-mutation';
const liverCancerPage = '/liver-cancer/gene-mutation';
const breastCancerPage = '/breast-cancer/gene-mutation';
const thyroidCancerPage = '/thyroid-cancer/gene-mutation';
const colorectalCancerPage = '/colorectal-cancer/gene-mutation';

const lungDrugPage = '/lung-cancer/drug';
const liverDrugPage = '/liver-cancer/drug';
const breastDrugPage = '/breast-cancer/drug';
const thyroidDrugPage = '/thyroid-cancer/drug';
const colorectalDrugPage = '/colorectal-cancer/drug';

const lungTreatmentPage = '/lung-cancer/other-treatment';
const liverTreatmentPage = '/liver-cancer/other-treatment';
const breastTreatmentPage = '/breast-cancer/other-treatment';
const thyroidTreatmentPage = '/thyroid-cancer/other-treatment';
const colorectalTreatmentPage = '/colorectal-cancer/other-treatment';

const lungArticlePage = '/lung-cancer/article';
const liverArticlePage = '/liver-cancer/article';
const breastArticlePage = '/breast-cancer/article';
const thyroidArticlePage = '/thyroid-cancer/article';
const colorectalArticlePage = '/colorectal-cancer/article';

const lungMedicinePage = '/lung-cancer/Medicine';
const liverMedicinePage = '/liver-cancer/Medicine';
const breastMedicinePage = '/breast-cancer/Medicine';
const thyroidMedicinePage = '/thyroid-cancer/Medicine';
const colorectalMedicinePage = '/colorectal-cancer/Medicine';
export const currentPage = (currentLocation: string) => {
  let resultLocation;
  switch (currentLocation) {
    case lungOverviewPage:
    case lungCancerPage:
    case lungDrugPage:
    case lungTreatmentPage:
    case lungArticlePage:
    case lungMedicinePage:
      resultLocation = 'lungCancerPage';
      break;
    case liverOverviewPage:
    case liverCancerPage:
    case liverDrugPage:
    case liverTreatmentPage:
    case liverArticlePage:
    case liverMedicinePage:
      resultLocation = 'liverCancerPage';
      break;
    case breastOverviewPage:
    case breastCancerPage:
    case breastDrugPage:
    case breastTreatmentPage:
    case breastArticlePage:
    case breastMedicinePage:
      resultLocation = 'breastCancerPage';
      break;
    case thyroidOverviewPage:
    case thyroidCancerPage:
    case thyroidDrugPage:
    case thyroidTreatmentPage:
    case thyroidArticlePage:
    case thyroidMedicinePage:
      resultLocation = 'thyroidCancerPage';
      break;
    case colorectalOverviewPage:
    case colorectalCancerPage:
    case colorectalDrugPage:
    case colorectalTreatmentPage:
    case colorectalArticlePage:
    case colorectalMedicinePage:
      resultLocation = 'colorectalCancerPage';
      break;
    default:
      resultLocation = '';
      break;
  }

  return resultLocation;
};
