import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

export type ProductStatus = 'ACTIVE' | 'inACTIVE';

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
  categoryId: string;
  status: ProductStatus;
}

export interface ProductsQuery {
  search: string;
  categoryId: string | 'all';
  status: ProductStatus | 'all';
}

export interface ProductsKpis {
  processedOrdersPercent: number;
  PENDINGOrdersPercent: number;
}

@Injectable({ providedIn: 'root' })
export class ProductsBackService {
  private readonly categoriesSubject = new BehaviorSubject<Category[]>([
    { id: 'cat-it', name: 'IT' },
    { id: 'cat-construction', name: 'Construction' },
    { id: 'cat-logistics', name: 'Logistics' },
  ]);

  private readonly productsSubject = new BehaviorSubject<Product[]>(this.seedProducts());

  private readonly querySubject = new BehaviorSubject<ProductsQuery>({
    search: '',
    categoryId: 'all',
    status: 'all',
  });
  private readonly kpisSubject = new BehaviorSubject<ProductsKpis>({
    processedOrdersPercent: 15,
    PENDINGOrdersPercent: 4,
  });

  readonly categories$ = this.categoriesSubject.asObservable();
  readonly kpis$ = this.kpisSubject.asObservable();
  readonly query$ = this.querySubject.asObservable();

  readonly productsFiltered$ = combineLatest([this.productsSubject, this.querySubject]).pipe(
    map(([products, q]) => {
      const s = q.search.trim().toLowerCase();
      return products.filter((p) => {
        const matchSearch = !s || p.name.toLowerCase().includes(s);
        const matchCategory = q.categoryId === 'all' || p.categoryId === q.categoryId;
        const matchStatus = q.status === 'all' || p.status === q.status;
      });

  readonly vm$ = combineLatest({
    kpis: this.kpis$,
    categories: this.categories$,
    query: this.query$,
    products: this.productsFiltered$,
  });

  setQuery(patch: Partial<ProductsQuery>) {
    this.querySubject.next({ ...this.querySubject.value, ...patch });
  }

  toggleACTIVE(productId: string) {
    const next: Product[] = this.productsSubject.value.map((p) =>
      p.id === productId
        ? { ...p, status: (p.status === 'ACTIVE' ? 'inACTIVE' : 'ACTIVE') as ProductStatus }
        : p
    );
    this.productsSubject.next(next);
  }

  create(product: Omit<Product, 'id'>) {
    const id =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : 'p-' + Date.now();

    const next: Product[] = [{ id, ...product }, ...this.productsSubject.value];
