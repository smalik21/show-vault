import { PersonType } from "@/types/types";
import styles from "./cast-section.module.scss";
import SectionHeader from "../section-header";
import { GetMediumImagePath } from "@/lib/utils";
import Image from "next/image";
import { ProfileIcon } from "@/lib/icons";
import Link from "next/link";

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
            <Link
              href={`/people/${member.id}`}
              key={`cast-member-${member.id}`}
              className={styles.member}
            >
              <div className={styles.imageContainer}>
                {imageSrc ? (
                  <div className={styles.imageWrapper}>
                    <Image
                      fill
                      src={imageSrc}
                      alt={`cast-member-image-${member.id}`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={styles.placeholderImage}>
                    <ProfileIcon width={100} height={100} />
                  </div>
                )}
              </div>
              <div className={styles.name}>{member.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CastSection;
