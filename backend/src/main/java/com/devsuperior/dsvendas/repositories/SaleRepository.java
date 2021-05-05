package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.DTO.SaleSumDTO;
import com.devsuperior.dsvendas.DTO.SucessDTO;
import com.devsuperior.dsvendas.entities.Sale;


public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query("SELECT new com.devsuperior.dsvendas.DTO.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "From Sale As obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.devsuperior.dsvendas.DTO.SucessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "From Sale As obj GROUP BY obj.seller")
	List<SucessDTO> sucessGroupedBySeller();
	
}
