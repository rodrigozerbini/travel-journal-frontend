export interface PlaceRequest {
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string; // yyyy-MM-dd
  endDate: string; // yyyy-MM-dd
  description: string;
  imageUrl?: string;
}

export interface PlaceResponse extends PlaceRequest {
  id: number;
}
