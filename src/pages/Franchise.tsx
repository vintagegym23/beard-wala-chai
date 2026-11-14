import FranchiseHero from '../components/franchise/FranchiseHero';
import WhyChoose from '../components/franchise/WhyChoose';
import PackageDetails from '../components/franchise/PackageDetails';
import FranchiseProcess from '../components/franchise/FranchiseProcess';
import FranchiseEnquiryForm from '../components/franchise/FranchiseEnquiryForm';

export default function Franchise() {
  return (
    <div className="flex flex-col w-full">
      <FranchiseHero />
      <WhyChoose />
      <PackageDetails />
      <FranchiseProcess />
      <FranchiseEnquiryForm />
    </div>
  );
}
