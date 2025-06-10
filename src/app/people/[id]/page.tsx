import { FetchPersonDetails } from "@/lib/apis";
import styles from "./person-details.module.scss";
import SectionHeader from "@/components/ui/section-header";
import { TransformPersonDetailsData } from "@/lib/utils";
import CardsContainer from "@/components/ui/cards-container";
import CardItem from "@/components/ui/card-item";
import Image from "next/image";
import { ProfileIcon } from "@/lib/icons";

const PersonDetails = async ({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) => {
  const params = await paramsPromise;
  const { id } = params;

  const dataResponse = await FetchPersonDetails(Number(id));
  const { personDetails, featuredContent } =
    TransformPersonDetailsData(dataResponse);

  return (
    <main className={styles.personDetails}>
      <SectionHeader title={personDetails.name} />
      <div className={styles.detailSection}>
        <div className={styles.imageContainer}>
          {personDetails.imageSrc ? (
            <Image
              loading="lazy"
              fill
              src={personDetails.imageSrc}
              alt={`detail-image-${personDetails.id}`}
            />
          ) : (
            <div className={styles.placeholderImage}>
              <ProfileIcon width={100} height={100} />
            </div>
          )}
        </div>
        <div className={styles.detailContent}>
          <div className={styles.description}>{personDetails.biography}</div>
          <div className={styles.details}>
            {personDetails.popularity && (
              <div className={`${styles.popularity} ${styles.field}`}>
                <span className={styles.label}>Popularity:</span>
                <div className={styles.value}>{personDetails.popularity}</div>
              </div>
            )}
            {personDetails.birthday && (
              <div className={`${styles.birthday} ${styles.field}`}>
                <span className={styles.label}>Birthday:</span>
                <div className={styles.value}>{personDetails.birthday}</div>
              </div>
            )}
            {personDetails.knownFor && (
              <div className={`${styles.knownFor} ${styles.field}`}>
                <span className={styles.label}>Known For:</span>
                <div className={styles.value}>{personDetails.knownFor}</div>
              </div>
            )}
            {personDetails.placeOfBirth && (
              <div className={`${styles.placeOfBirth} ${styles.field}`}>
                <span className={styles.label}>Place of Birth:</span>
                <div className={styles.value}>{personDetails.placeOfBirth}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <SectionHeader title="Featured Movies and TV Shows" />
      <CardsContainer>
        {featuredContent.map((item, idx) => (
          <CardItem
            key={`${idx}-card-item-${item.id}`}
            id={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            releaseYear={item.releaseYear}
            imdb={item.imdb}
            showType={item.showType}
          />
        ))}
      </CardsContainer>
    </main>
  );
};

export default PersonDetails;
