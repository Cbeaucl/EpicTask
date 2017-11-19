package com.chris.epictask.repository;

import com.chris.epictask.domain.Epic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the Epic entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EpicRepository extends JpaRepository<Epic, Long> {

    @Query("select epic from Epic epic where epic.user.login = ?#{principal.username}")
    Page<Epic> findByUserIsCurrentUser(Pageable pageable);

}
