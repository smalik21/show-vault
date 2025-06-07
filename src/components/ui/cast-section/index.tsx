import { PersonType } from "@/types/types";
import styles from "./cast-section.module.scss";
import SectionHeader from "../section-header";
import { GetMediumImagePath } from "@/lib/utils";
import Image from "next/image";
import { ProfileIcon } from "@/lib/icons";

export type CastSectionPropsType = {
  cast: PersonType[];
};

const CastSection = (vm: CastSectionPropsType) => {
  return (
    <div className={styles.castSection}>
      <SectionHeader title="Cast" />
      <div className={styles.castContainer}>
        {vm.cast.map((member) => {
          const imageSrc = GetMediumImagePath(member.profile_path);
          return (
            <div key={`cast-member-${member.id}`} className={styles.member}>
              <div className={styles.imageContainer}>
                {imageSrc ? (
                  <Image
                    height={240}
                    width={180}
                    src={imageSrc}
                    alt={`cast-member-image-${member.id}`}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.placeholderImage}>
                    <ProfileIcon width={100} height={100} />
                  </div>
                )}
              </div>
              <div className={styles.name}>{member.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastSection;
